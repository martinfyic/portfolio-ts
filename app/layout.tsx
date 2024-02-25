import { ReactNode } from "react";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { Footer } from "@/components";
import { Providers } from "./providers";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import { inter } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Martin Ferreira Programador Web Full Stack",
    default: "Martin Ferreira | Programador Web Full Stack",
  },
  description:
    "Portfolio de Martin Ferreira Yic, Programador Web Full Stack, stack MERN, Next.js, CSS, HTML",
  keywords:
    "JavaScript, TypeScript, React, Next.js, Astro, Node, HTML, CSS, Developer, Full Stack, MERN, Express",
  authors: [
    {
      name: "Martin Ferreira Yic",
      url: "https://www.linkedin.com/in/martin-ferreira-yic/",
    },
  ],
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png"],
  },
  metadataBase: new URL("https://www.martin-ferreira.com"),
  openGraph: {
    title: "Martin Ferreira | Programador Web Full Stack",
    description: "Portfolio de Martin Ferreira Yic, Programador Web Full Stack",
    images: [
      {
        url: "/og-web.png",
        width: "800",
        height: "600",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <div className="absolute top-0 z-[-2] h-auto w-full bg-light bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-darker dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <Providers>
            {children}
            <Analytics />
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
