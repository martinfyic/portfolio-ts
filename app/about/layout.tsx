import { PageNavbar } from "@/components";
import { ReactNode } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  return {
    title: "Sobre Mi",
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
  };
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <section className="mt-32">
      <PageNavbar />
      {children}
    </section>
  );
}
