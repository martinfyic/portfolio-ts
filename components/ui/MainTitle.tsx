import { FC } from "react";

interface Props {
  title: string;
  style?: string;
}

export const MainTitle: FC<Props> = ({ title, style }) => {
  return (
    <h1 className={`mt-6 text-4xl font-bold lg:mt-0 lg:text-6xl ${style}`}>
      {title}
    </h1>
  );
};
