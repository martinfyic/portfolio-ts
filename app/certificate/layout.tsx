import { PageNavbar } from "@/components";
import { ReactNode } from "react";

export const generateMetadata = async () => {
  return {
    title: `Certificados obtenidos | Martin Ferreira`,
    description: "Portfolio de Martin Ferreira Yic, Todos los certificados",
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

export default function CertificateSlugLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="mt-32">
      <PageNavbar />
      {children}
    </section>
  );
}
