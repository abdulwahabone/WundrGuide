"use client";

import Image from "next/image";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  const pathName = usePathname();

  const showCreateButton = pathName !== "/create";

  const isHome = pathName == "/";
  if (!session && !isHome) redirect("/");

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 my-2 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.svg"
              alt="Wundr guide logo"
              width="150"
              height="50"
              className="mr-2 rounded-sm"
            ></Image>
          </Link>
          <div>
            {session ? (
              <div className="flex justify-center align-middle">
                {showCreateButton && (
                  <Link key="create" passHref href="/create">
                    <div className="mr-5 rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">
                      Create Destination Guide
                    </div>
                  </Link>
                )}
                <UserDropdown session={session} />
              </div>
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
