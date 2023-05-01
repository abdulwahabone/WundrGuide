"use client";

import { useCallback, useRef, useEffect } from "react";
import * as LR from "@uploadcare/blocks";
import { UC_MEDIA_CSS, UC_VIDEO_CSS } from "@/lib/constants";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lr-file-uploader-inline": any;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lr-data-output": any;
    }
  }
}

LR.registerBlocks(LR);

export default function MediaUploader({
  onlyVideo,
  onChange,
}: {
  onlyVideo?: boolean;
  onChange: Function;
}) {
  const dataOutputRef = useRef<any>();

  const handleUploaderEvent = useCallback(
    (e: CustomEvent<any>) => {
      const { data } = e.detail;
      const urls = data.map(({ cdnUrl }: { cdnUrl: string }) => cdnUrl);
      onChange(urls);
    },
    [onChange],
  );

  useEffect(() => {
    const el = dataOutputRef.current;
    el?.addEventListener(
      "lr-data-output",
      handleUploaderEvent as EventListenerOrEventListenerObject,
    );
    return () => {
      el?.removeEventListener(
        "lr-data-output",
        handleUploaderEvent as EventListenerOrEventListenerObject,
      );
    };
  }, [handleUploaderEvent]);

  const mediaStyles = onlyVideo ? UC_VIDEO_CSS : UC_MEDIA_CSS;

  return (
    <div className="flex flex-col gap-4">
      <lr-file-uploader-inline
        ctx-name="Wundr"
        css-src={mediaStyles}
        onEvent={handleUploaderEvent}
      ></lr-file-uploader-inline>

      <lr-data-output
        ref={dataOutputRef}
        use-event
        hidden
        ctx-name="Wundr"
        onEvent={handleUploaderEvent}
      ></lr-data-output>
    </div>
  );
}
