import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Wundr Guide - Discover the World.",
  description:
    "Unlock a World of Inspiration with Handcrafted Destination Guides by Your Favorite Creators.",
  twitter: {
    card: "summary_large_image",
    title: "Wundr Guide - Discover the World.",
    description:
      "Unlock a World of Inspiration with Handcrafted Destination Guides by Your Favorite Creators.",
    creator: "@abdulwahabone",
  },
  metadataBase: new URL("https://wundr-guide.vercel.app/"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-start py-32">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
