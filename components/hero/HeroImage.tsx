import { FC } from 'react';
import Image from 'next/image';

export const HeroImage: FC = () => {
  return (
    <div className="md:w-1/2 md:mt-2">
      <Image
        src="/personal-foto.png"
        alt="Foto de Martin Ferreira"
        priority
        width={300}
        height={300}
      />
    </div>
  );
};
