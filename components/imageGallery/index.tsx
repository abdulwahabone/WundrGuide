/* eslint-disable @next/next/no-img-element */
"use client";

import { Carousel } from "flowbite-react";

function extractUuidFromUrl(url: string) {
  const uuidRegex =
    /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
  const matches = url.match(uuidRegex);
  return matches ? matches[0] : null;
}

export default function ImageGallery({ list }: { list: Array<any> }) {
  return (
    <div className="mt-[20px]">
      <div className="relative w-full">
        <Carousel slideInterval={2000} leftControl=" " rightControl=" " className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {list?.map((url) => {
            const uuid = extractUuidFromUrl(url);
            const imgUrl = `https://ucarecdn.com/${uuid}/-/resize/800/`;

            return (
              <div key={url} className="duration-700 ease-in-out z-10">
                <img
                  src={imgUrl}
                  className="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"
                  alt=""
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
