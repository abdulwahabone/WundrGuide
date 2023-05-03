import Balancer from "react-wrap-balancer";
import prisma from "@/lib/prisma";
import VerticalVideoPlayer from "@/components/verticalVideoPlayer";
import LocationCardList from "@/components/locationCardList";

function formatDate(date: any) {
  var d = new Date(date);
  return d.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

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

  const duration = guide?.duration;
  const label =
    duration && duration > 2 ? `${duration} days trip` : "1 day trip";

  const dateLabel = formatDate(guide?.dateCreated);

  return (
    <div className="relative w-full max-w-3xl">
      <div
        className="mx-auto animate-fade-up text-center text-sm font-thin text-black opacity-0"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        {`${dateLabel}`}
      </div>
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-4xl md:leading-[4rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>{guide?.title}</Balancer>
      </h1>
      <div
        className="mx-auto animate-fade-up text-center text-lg font-medium text-gray-500 opacity-0"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        {label}
      </div>
      <div className="mx-auto mt-10">
        <VerticalVideoPlayer url={guide?.cover || ""} hideDetails />
      </div>
      <LocationCardList list={guide?.locations} />
    </div>
  );
}
