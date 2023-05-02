import MediaGrid from "@/components/mediaGrid";
import VerticalVideoPlayer from "@/components/verticalVideoPlayer";
import axios from "axios";
import { Key, Suspense } from "react";
import Balancer from "react-wrap-balancer";

const getGuide = async () => {
  try {
    const { data } = await axios.get(
      `https://wundr-guide.vercel.app/api/guide`,
    );
    // const { data } = await axios.get(`http://localhost:3000/api/guide`);
    return data;
  } catch (err) {
    console.log({ err });
  }
};

export default async function Page() {
  const guides = await getGuide();

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
            Your Favorite Creators
          </Balancer>
        </p>
      </div>
      <Suspense fallback="...">
        <MediaGrid>
          {guides.map((g: { id: string, cover: string }) => {
            const { cover, id } = g;
            return <VerticalVideoPlayer url={cover} key={id} />;
          })}
        </MediaGrid>
        {/* <pre>{JSON.stringify(guides, null, 2)}</pre> */}
      </Suspense>
    </div>
  );
}
