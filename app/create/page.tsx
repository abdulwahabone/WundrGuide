"use client";

import Balancer from "react-wrap-balancer";
import MultiStepFom from "./multiStepFom";

export default async function Page() {
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
      </p>
      <MultiStepFom />
    </div>
  );
}
