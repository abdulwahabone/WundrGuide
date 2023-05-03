import Balancer from "react-wrap-balancer";
import prisma from "@/lib/prisma";

const getGuideById = async (id: string | string[] | undefined) => {
  const queryId = id instanceof Array ? id[0] : id;
  try {
    const guide = await prisma.guides.findUnique({
      where: {
        id: queryId,
      },
      include: {
        locations: true,
      },
    });

    return guide;
  } catch (err) {
    console.log({ err });
  }
};

export default async function Page({ params }: { params: any }) {
  const guide = await getGuideById(params?.id);

  return (
    <div className="w-full max-w-xl">
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-4xl md:leading-[4rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>Create destination guide</Balancer>
      </h1>
      <p
        className="mt-1 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>Share Your Favorite Spots with Your Audience!</Balancer>
        {/* <p><pre>{params}</pre></p> */}
        <pre>{JSON.stringify(guide, null, 2)}</pre>
      </p>
    </div>
  );
}
