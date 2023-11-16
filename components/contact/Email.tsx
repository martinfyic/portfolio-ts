import { FC } from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";

import { IEmailProps } from "@/interfaces";

export const EmailToMe: FC<Readonly<IEmailProps>> = ({
  email,
  message,
  name,
}) => {
  return (
    <Html lang="es">
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-light font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Tienes un mensaje 🙌🏻!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hola Martin,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Recibiste un correo electrónico de <strong>{name}</strong>. Su
              correo electrónico es {email}. <br /> El mensaje ✉️: <br />
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export const EmailToClient: FC<Readonly<IEmailProps>> = ({
  email,
  message,
  name,
}) => {
  return (
    <Html lang="es">
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-light font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Gracias por comunicarte!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hola {name},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Me comunicaré a la brevedad al correo electrónico {email}. <br />
              Gracias por contactar, saludos <br />
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Mensaje enviado: <br /> {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
