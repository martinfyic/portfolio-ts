import React from "react";
import { ContactForm } from "./ContactForm";
import { SubTitleSection } from "../ui";

export const ContactSection = () => {
  return (
    <section id="contact" className="body-font relative">
      <div className="container mx-auto px-5 py-24 lg:my-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <SubTitleSection text="Contacto ✉️" />
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
