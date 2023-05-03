"use client";

import MediaUploader from "@/components/mediaUploader";
import { Details } from "./useForm";

export default function BasicDetails({
  details,
  onChange,
}: {
  details: Details;
  onChange: Function;
}) {
  return (
    <div className="py-8">
      <div className="px-8">
        <div className="mb-6">
          <label
            htmlFor="title"
            className="text-gray-90 mb-2 block text-sm font-medium"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={details.title}
            onChange={(e) => onChange("title", e.target.value)}
            maxLength={100}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            placeholder="Tokyo's Top 10: Uncovering the Best Destinations in Japan."
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-medium text-gray-900 "
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={details.location}
            onChange={(e) => onChange("location", e.target.value)}
            maxLength={100}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            placeholder="Tokyo, Japan"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="duration"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Duration (in days)
          </label>
          <input
            type="number"
            id="duration"
            value={details.duration}
            onChange={(e) => onChange("duration", e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            placeholder="5"
            min="1"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="price"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Price
          </label>
          <div className="flex">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600">
              $
            </span>
            <input
              type="number"
              id="price"
              value={details.price}
              onChange={(e) => onChange("price", e.target.value)}
              className="block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  "
              placeholder="1"
              required
              min="1"
            />
          </div>
        </div>

        <p className="mb-0 block text-sm font-medium text-gray-900">
          <strong>Vertical Cover Video</strong> (for higher engagement)
        </p>
      </div>

      <div className="min-h-[270px] px-3">
        <MediaUploader
          formStep={1}
          values={details.media}
          onlyVideo
          key="1"
          onChange={(files: Array<any>) => {
            // const urls = files.map(({ cdnUrl }: { cdnUrl: string }) => cdnUrl);
            // onChange("cover", urls[0]);
            onChange("media", files);
          }}
        />
      </div>
    </div>
  );
}
