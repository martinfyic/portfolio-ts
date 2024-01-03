import Image from "next/image";
import NextLink from "next/link";

interface Props {
  currentTheme?: string;
}

export const Logo = ({ currentTheme = "light" }: Props) => {
  return (
    <NextLink
      href="/"
      className="cursor-pointer lg:block"
      aria-label="home button"
    >
      <Image
        src={currentTheme === "dark" ? "/logo_light.png" : "/logo_dark.png"}
        alt="logo Martin Ferreira"
        width={80}
        height={80}
      />
    </NextLink>
  );
};
