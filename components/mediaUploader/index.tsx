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
  values,
}: {
  onlyVideo?: boolean;
  onChange: Function;
  values: Array<any>;
}) {
  const dataOutputRef = useRef<any>();

  const handleUploaderEvent = useCallback((e: CustomEvent<any>) => {
    const { data } = e.detail;
    console.log({ data, values, e });
    const isDuplicate = values.some((val) => val?.cdnUrl === data.cdnUrl);
    if (isDuplicate) {
      console.log("ITS DUPLICATE");
    }
    if (!isDuplicate) onChange(data);
  }, []);

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

  useEffect(() => {
    dataOutputRef.current.uploadCollection.clearAll();
    dataOutputRef.current.$["*currentActivity"] = "upload-list";
    values.forEach((val) => {
      const thumbUrl = `https://ucarecdn.com/${val.uuid}/${
        val.cdnUrlModifiers || ""
      }-/preview/-/scale_crop/400x400/`;

      dataOutputRef.current.uploadCollection.add({
        ...val,
        thumbUrl,
        fileName: val.name,
        externalUrl: val.cdnUrl,
        fileSize: val.size,
      });
    });
    setTimeout(() => onChange(values), 100);
  }, []);

  const mediaStyles = onlyVideo ? UC_VIDEO_CSS : UC_MEDIA_CSS;

  return (
    <div className="flex flex-col gap-4">
      <lr-file-uploader-inline
        ctx-name="Wundr"
        activity="upload-list"
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
