import MediaGrid from "@/components/mediaGrid";
import { Underline } from "@/components/shared/icons";
import VerticalVideoPlayer from "@/components/verticalVideoPlayer";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";
import Balancer from "react-wrap-balancer";

const getGuides = async () => {
  try {
    const guides = await prisma.guides.findMany({
      include: { locations: true },
    });
    return guides;
  } catch (err) {
    console.log({ err });
  }
};

export default async function Page() {
  const guides = await getGuides();

  return (
    <div className="z-10 max-w-[1024px]">
      <div className="z-10 mx-auto mb-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Discover the World</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Unlock a World of Inspiration with Handcrafted Destination Guides by
            <span className="relative ml-2 inline-block h-[50px]">
              Your Favorite Creators
              <span className="h-full w-full">
                <Underline />
              </span>
            </span>
          </Balancer>
        </p>
      </div>
      <Suspense fallback="...">
        <MediaGrid>
          {guides?.map(
            (g: {
              id: string;
              cover: string;
              title: string;
              duration: number;
            }) => {
              const { cover, id, title, duration } = g;
              return (
                <Link href={`./destination/${id}`} key={id}>
                  <VerticalVideoPlayer
                    duration={duration}
                    title={title}
                    url={cover}
                  />
                </Link>
              );
            },
          )}
        </MediaGrid>
      </Suspense>
    </div>
  );
}
