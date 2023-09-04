'use client';
import { FC } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';

export const HeroSection: FC = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-40">
        <div className="md:w-1/2 md:mt-2">
          <Image
            src="/personal-foto.png"
            alt="Foto de Martin Ferreira"
            priority
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-6xl md:mt-0">
            Hola 👋🏻, soy Martín!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Desarrollador{' '}
            <span className="text-primary font-semibold">Full Stack</span> en
            Montevideo, UY.
          </p>
          <Link
            to="proyectos"
            className="text-neutral-100 font-semibold px-6 py-3 bg-primary cursor-pointer rounded shadow hover:bg-orange-500"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Proyectos
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center align-middle">
        <Link
          to="proyectos"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};
