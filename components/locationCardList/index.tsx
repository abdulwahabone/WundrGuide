"use client";

import Card from "@/components/home/card";
import { Bar, Beach, Hotel } from "../shared/icons";
import ArrowDown from "../shared/icons/arrowDown";
import Location from "../shared/icons/location";
import ImageGallery from "../imageGallery";
import HorizontalVideoPlayer from "../horizontalVideoPlayer";

function filterImageUrls(mediaUrls: Array<string>) {
  const imageUrls = mediaUrls.filter((url) => {
    return /\.(jpeg|jpg|gif|png)$/i.test(url);
  });
  return imageUrls;
}

function filterVideoUrls(mediaUrls: Array<string>) {
  const videoUrls = mediaUrls.filter((url) => {
    return /\.(mp4|avi|mov|wmv|flv)$/i.test(url);
  });
  return videoUrls;
}

const getIconByType = (type: string) => {
  switch (type) {
    case "Hotel":
      return <Hotel />;
    case "Bar":
      return <Bar />;
    case "Beach":
      return <Beach />;
    default:
      return <Location />;
  }
};

export default function LocationCardList({ list }: { list?: Array<any> }) {
  return (
    <div className="mt-[10px]">
      {list?.map(
        ({
          id,
          link,
          title,
          description,
          type,
          media,
        }: {
          id: string;
          link: string;
          title: string;
          description: string;
          type: string;
          media: Array<string>;
        }) => {
          const imageList = filterImageUrls(media);
          const videoList = filterVideoUrls(media);

          return (
            <div
              key={id}
              className="relative mb-[10px] flex flex-col items-center"
            >
              <ArrowDown />
              <div className="absolute left-[calc(50%-40px)] top-[250px] z-10 h-20 w-20 rounded-full bg-gradient-to-br from-stone-950 to-stone-700 p-3 text-center font-bold text-white shadow-md">
                <div className="flex h-full w-full items-center justify-center align-middle">
                  {getIconByType(type)}
                </div>
              </div>
              <Card>
                <div className="p-10">
                  <h2 className="mx-auto mt-5 max-w-[500px] bg-gradient-to-br from-black to-stone-700 bg-clip-text text-center font-display text-2xl font-semibold text-transparent">
                    {title}
                  </h2>

                  {imageList.length > 0 && <ImageGallery list={imageList} />}
                  {videoList.length > 0 && (
                    <HorizontalVideoPlayer list={videoList} />
                  )}

                  <div>{description}</div>

                  <div className="mt-5 w-full flex">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" mx-auto rounded-full border border-black bg-black px-8 py-2 text-lg text-white transition-all hover:bg-white hover:text-black"
                      href={link}
                    >
                      Take me there
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          );
        },
      )}
    </div>
  );
}
