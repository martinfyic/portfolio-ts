import { FC } from "react";
import Image from "next/image";

export const ProfileImage: FC = () => {
  return (
    <div className="fade-in mb-10 flex items-center justify-center">
      <Image
        alt="Foto de Martin Ferreira"
        src="https://res.cloudinary.com/dtweirsya/image/upload/v1718402481/porfolio/personal-foto_ijrtxm.webp"
        width={400}
        height={400}
      />
    </div>
  );
};
