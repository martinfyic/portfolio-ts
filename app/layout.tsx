import { ReactNode } from "react";
import { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";

import { Footer } from "@/components";
import { Providers } from "./providers";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import { inter } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    template: "%s | Martin Ferreira Programador Web Full Stack",
    default: siteConfig.default,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.links.linkedin,
    },
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  openGraph: {
    title: siteConfig.default,
    description: "Portfolio de Martin Ferreira Yic, Programador Web Full Stack",
    images: [
      {
        url: "/og-web.png",
        width: "800",
        height: "600",
      },
    ],
  },
  verification: {
    google: siteConfig.verification.google,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/es-ES",
    },
  },
  robots: {
    follow: true,
    index: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
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
