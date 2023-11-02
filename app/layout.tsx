"use client";

import { ReactNode, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { Footer } from "@/components";
import { Providers } from "./providers";
import "animate.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <div className="absolute top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-darker dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
