"use client";
import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { Calendar } from "../shared/icons";
import useOnScreen from "@/lib/hooks/useOnScreen";

export default function VerticalVideoPlayer({
  url,
  title,
  duration,
  hideDetails = false,
}: {
  url: string;
  title?: string;
  duration?: number;
  hideDetails?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const randomNumBetween38And5 = () => {
    const lowerBound = 3.8;
    const upperBound = 5.1;
    const range = upperBound - lowerBound;
    const randomNum = Math.random() * range + lowerBound;
    return Number(randomNum.toFixed(1));
  };

  const randomNumBetween100And500 = () => {
    return Math.floor(Math.random() * (500 - 100 + 1) + 100);
  };

  const ratings = randomNumBetween38And5();
  const reviews = randomNumBetween100And500();

  const durationLabel = duration && duration < 2 ? "1 day" : `${duration} days`;

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className="group relative mx-auto h-[500px] w-[300px] cursor-pointer overflow-hidden rounded-lg"
    >
      {!hideDetails && (
        <>
          <div className="absolute bottom-0 z-30 flex flex-col p-5">
            <div className="flex align-middle">
              <Calendar />
              <p
                className="ml-2 animate-fade-up text-left text-sm leading-[18px] text-white opacity-0"
                style={{
                  animationDelay: "0.25s",
                  animationFillMode: "forwards",
                }}
              >
                {durationLabel}
              </p>
            </div>

            <p
              className="mb-2 mt-2 line-clamp-3 animate-fade-up text-left text-2xl font-extralight text-white opacity-0"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              {title}
            </p>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                {ratings}
              </p>
              <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-50"></span>
              <a className="text-[12px] font-medium text-gray-900 underline hover:no-underline dark:text-white">
                {`${reviews} reviews`}
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 z-20 h-[200px] w-[300px] rounded-lg bg-gradient-to-b from-transparent to-slate-800 transition-[height] group-hover:h-[400px]" />
        </>
      )}

      <div className="relative h-full w-full pt-[56.25%]">
        {isLoaded && (
          <ReactPlayer
            className="react-player absolute left-0 top-0"
            url={url}
            width="100%"
            height="auto"
            loop={true}
            playing={isVisible}
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
