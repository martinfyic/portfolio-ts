import { Bungee, Inter, Montserrat_Alternates } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const titleFont = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const logo = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});
