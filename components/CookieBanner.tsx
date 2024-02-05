"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";

export const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState(false);
  const [cookieBanner, setCookieBanner] = useState(true);

  const deniedCookies = () => {
    setCookieConsent(false);
    setCookieBanner(false);
  };

  const acceptedCookies = () => {
    setCookieConsent(true);
    setCookieBanner(false);
  };

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 mx-auto my-10 flex max-w-max flex-col items-center justify-between gap-4 rounded-lg bg-gray-700 px-3 py-3 shadow sm:flex-row md:max-w-screen-sm md:px-4 ${!cookieBanner && "hidden"}`}
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
        <button
          className="rounded-md border-gray-900 px-5 py-2 text-gray-300 hover:text-gray-100"
          onClick={deniedCookies}
        >
          Denegar
        </button>
        <button
          className="rounded-lg bg-gray-900 px-5 py-2 text-white hover:bg-gray-800"
          onClick={acceptedCookies}
        >
          Aceptar Cookies
        </button>
      </div>
    </div>
  );
};
