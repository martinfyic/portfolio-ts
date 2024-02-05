"use client";

import Link from "next/link";

export const CookieBanner = () => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0
                        mx-auto my-10 flex max-w-max 
                        flex-col items-center justify-between gap-4 rounded-lg bg-gray-700 px-3 py-3 shadow  
                         sm:flex-row md:max-w-screen-sm md:px-4`}
    >
      <div className="text-center">
        <Link href="/info/cookies">
          <p>
            Estamos usando{" "}
            <span className="font-bold text-primary">cookies</span> en este
            sitio.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button className="rounded-md border-gray-900 px-5 py-2 text-gray-300">
          Decline
        </button>
        <button className="rounded-lg bg-gray-900 px-5 py-2 text-white">
          Allow Cookies
        </button>
      </div>
    </div>
  );
};
