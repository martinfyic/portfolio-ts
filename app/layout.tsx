"use client";

import { ReactNode, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { Footer } from "@/components";
import { Providers } from "./providers";
import "animate.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <div className="absolute top-0 z-[-2] h-auto w-full bg-light bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-darker dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <Providers>
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
