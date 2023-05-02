import { ReactNode } from "react";

export default function MediaGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">{children}</div>;
}
