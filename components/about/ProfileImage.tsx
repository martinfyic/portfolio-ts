import { FC } from "react";
import Image from "next/image";
import ProfilePic from "../../public/personal-foto.png";

export const ProfileImage: FC = () => {
  return (
    <div className="fade-in mb-10 flex items-center justify-center">
      <Image
        alt="Foto de Martin Ferreira"
        src={ProfilePic}
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
