"use client";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

export default function VerticalVideoPlayer({ url }: { url: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="mx-auto h-[500px] w-[300px] cursor-pointer overflow-hidden rounded-lg bg-green-500">
      <div className="relative h-full w-full pt-[56.25%]">
        {isLoaded && (
          <ReactPlayer
            className="react-player absolute left-0 top-0"
            url={url}
            width="100%"
            height="auto"
            loop={true}
            playing={true}
            playsinline={true}
            volume={0.5}
            muted={true}
            onReady={(e) => {
              const player = e.getInternalPlayer();
              player.setAttribute("muted", "true");
            }}
          />
        )}
      </div>
    </div>
  );
}
