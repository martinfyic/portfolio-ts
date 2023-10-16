import React from "react";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="body-font animate__animated animate__fadeIn relative"
    >
      <div className="container mx-auto px-5 py-24 lg:my-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h2 className="mb-12 mt-6 text-center text-4xl font-bold md:text-6xl">
            Contacto ✉️
            <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-primary" />
          </h2>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Me comunicaré contigo a la mayor brevedad posible. No dudes en
            escribir si tienes alguna pregunta o inquietud.
          </p>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
