import NextLink from "next/link";
import { PageNavbar } from "@/components";

export default function NotFound() {
  return (
    <>
      <PageNavbar />
      <main className="mt-5">
        <div className="flex h-screen items-center justify-center">
          <div>
            <h2 className="mb-8 text-3xl md:text-7xl">
              <strong className="font-semibold">404</strong> | No encontrado
            </h2>
            <div className="flex items-center justify-center">
              <NextLink
                href="/"
                className="cursor-pointer rounded bg-primary px-6 py-3 font-semibold text-light shadow transition-transform hover:-translate-y-1 hover:opacity-70"
                aria-label="Return to home page"
              >
                Volver a inicio
              </NextLink>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
