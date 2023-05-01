"use client";

import { MouseEventHandler } from "react";

export default function Button({
  label,
  alt,
  disabled,
  customStyles,
  success,
  onClick,
}: {
  label: string;
  alt?: boolean;
  disabled?: boolean;
  customStyles?: string | "";
  success?: boolean;
  onClick: MouseEventHandler;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lgpx-6 min-w-[100px] transform rounded-lg py-2 font-medium capitalize tracking-wide  transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 ${
        alt
          ? "border border-blue-600 bg-transparent text-blue-600 hover:text-white"
          : "bg-blue-600 text-white"
      } ${
        disabled ? "bg-blue-300 text-white hover:bg-blue-300" : ""
      } ${customStyles}
      ${success ? "bg-emerald-400 hover:bg-emerald-300" : ""}
      `}
    >
      {label}
    </button>
  );
}
