"use client";

import MediaUploader from "@/components/mediaUploader";
import { useState } from "react";
import { GuideLocations, locationTypes } from "./useForm";

export default function AddLocation({
  location,
  onChange,
  formStep,
  guideLocations,
}: {
  location: GuideLocations;
  onChange: Function;
  formStep: number;
  guideLocations: Array<GuideLocations>;
}) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <>
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
              value={location?.title}
              onChange={(e) => onChange("title", e.target.value)}
              maxLength={100}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              placeholder="My favourite spot in the city!"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              Description
            </label>
            <textarea
              id="description"
              value={location?.description}
              onChange={(e) => onChange("description", e.target.value)}
              maxLength={100}
              className="block min-h-[160px] w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              placeholder="Escape the stresses of everyday life and visit this amazing place, a breathtaking destination that offers something for everyone. With stunning natural landscapes, rich history, and vibrant culture, you're sure to be fascinated. Outdoor enthusiasts will love the variety of activities available, while those seeking relaxation can take in the serene atmosphere and stunning views. Don't miss out on this incredible destination – pack your bags and get ready for an unforgettable adventure.."
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="link"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Directions or referral link
            </label>
            <input
              type="text"
              id="link"
              value={location?.link}
              onChange={(e) => onChange("link", e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              placeholder="https://www.google.com/maps...."
              required
            />
          </div>

          <div className="mb-6">
            <p className="mb-2 block text-sm font-medium text-gray-900">Type</p>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              onClick={() => setShowDropdown((show) => !show)}
              className="z-10 inline-flex w-[180px] flex-shrink-0 items-center justify-between rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-300"
              type="button"
            >
              {location?.type}
              <svg
                aria-hidden="true"
                className="ml-1 h-[25px] w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            {showDropdown && (
              <div
                id="dropdown"
                className="absolute z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow"
              >
                <ul
                  className="w-[180px] py-2 text-sm text-gray-700 "
                  aria-labelledby="dropdown-button"
                >
                  {locationTypes.map((type) => (
                    <li
                      onClick={() => {
                        onChange("type", type);
                        setShowDropdown(false);
                      }}
                      key={type}
                    >
                      <a className="block cursor-pointer px-4 py-2 hover:bg-gray-100">
                        {type}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <p className="mb-0 block text-sm font-medium text-gray-900">
            Images or Videos
          </p>
        </div>

        <div className="px-3">
          <MediaUploader
            formStep={formStep}
            values={location?.media}
            key={`${formStep}`}
            onChange={(files: Array<any>) => {
              // const urls = files.map(({ cdnUrl }: { cdnUrl: string }) => cdnUrl);
              // onChange("cover", urls[0]);
              onChange("media", files);
            }}
          />
        </div>
      </div>
    </>
  );
}
