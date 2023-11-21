import { FC } from "react";
interface Props {
  text: string;
  style?: string;
}

export const SubTitle: FC<Props> = ({ text, style }) => {
  return (
    <h2 className={`mb-6 text-center text-2xl font-bold md:text-left ${style}`}>
      {text}
    </h2>
  );
};
