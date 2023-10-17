import { FC } from "react";
import Image from "next/image";
import ProfilPic from "../../public/personal-foto.png";

export const HeroImage: FC = () => {
  return (
    <div className="animate__animated animate__fadeIn md:mt-2 md:w-1/2">
      <Image
        alt="Foto de Martin Ferreira"
        src={ProfilPic}
        priority
        sizes="100vw"
        style={{
          width: 600,
          height: "auto",
        }}
      />
    </div>
  );
};
