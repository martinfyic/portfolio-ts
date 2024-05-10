import { FC } from "react";

interface Props {
  title: string;
  style?: string;
}

export const MainTitle: FC<Props> = ({ title, style }) => {
  return (
    <h1 className={`mb-2 mt-6 text-5xl font-bold lg:mt-2 lg:text-7xl ${style}`}>
      {title}
    </h1>
  );
};
