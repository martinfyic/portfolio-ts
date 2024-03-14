"use client";
import { FC } from "react";

import { HeroImage } from "./HeroImage";
import { HeroDetail } from "./HeroDetail";
import { ArrowLink } from "../ui";

export const HeroSection: FC = () => {
  return (
    <section id="home" className="relative">
      <div className="my-10 flex flex-col items-center justify-center py-10 text-center lg:flex-row xl:my-24 xl:py-24">
        <HeroDetail />
        <HeroImage />
      </div>
      <ArrowLink to="#about" />
    </section>
  );
};
