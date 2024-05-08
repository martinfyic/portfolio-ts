"use client";
import { FC } from "react";

import { HeroDetail } from "./HeroDetail";
import { ArrowLink } from "../ui";

export const HeroSection: FC = () => {
  return (
    <section id="home" className="relative">
      <div className="my-24 flex flex-col items-center justify-center py-10 text-center md:my-28 lg:flex-row xl:my-24 xl:py-24">
        <HeroDetail />
      </div>
      <ArrowLink to="#about" />
    </section>
  );
};
