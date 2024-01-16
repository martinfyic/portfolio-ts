import { Metadata } from "next";

import {
  AboutSection,
  BackgroundAnimate,
  ContactSection,
  HeroSection,
  HomeNavbar,
  ProjectSection,
  StudiesSection,
} from "@/components";

export const metadata: Metadata = {
  title: "Martin Ferreira | Programador Web Full Stack",
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
  metadataBase: new URL("http://localhost:3000/"),
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

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <BackgroundAnimate />
      <HomeNavbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <StudiesSection />
      <ContactSection />
    </main>
  );
}
