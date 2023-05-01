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
    <div className="p-8">
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
        <input
          type="number"
          id="price"
          value={details.price}
          onChange={(e) => onChange("price", e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
          placeholder="1"
          required
          min="1"
        />
      </div>

      <p className="mb-2 block text-sm font-medium text-gray-900">
        Cover Video
      </p>
      <MediaUploader
        onlyVideo
        onChange={(files: Array<string>) => onChange("cover", files[0])}
      />
    </div>
  );
}
