import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div
      className={`relative col-span-1 mt-10 h-auto min-h-[300px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-2`}
    >
      {children}
    </div>
  );
}
