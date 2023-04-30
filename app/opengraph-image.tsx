/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

export const runtime = "edge";
export const alt = "Wundr Guide - Discover the World";
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <img
          src={new URL("../public/logo.png", import.meta.url).toString()}
          alt="Wundr Guide Logo"
          tw="w-max h-max mb-4 opacity-95"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
