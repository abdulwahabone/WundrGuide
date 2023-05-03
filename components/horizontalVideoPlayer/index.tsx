/* eslint-disable @next/next/no-img-element */

export default function HorizontalVideoPlayer({ list }: { list?: Array<any> }) {
  return (
    <div className="my-8">
      {list?.map((url) => (
        <video className="w-full rounded-lg" key={url} controls>
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
}
