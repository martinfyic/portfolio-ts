import { FC } from "react";

interface Props {
  text: string;
  styleSubTitle?: string;
  styleLine?: string;
}

export const SubTitleSection: FC<Props> = ({
  text,
  styleSubTitle,
  styleLine,
}) => {
  return (
    <h2
      className={`mb-12 mt-6 text-center text-4xl font-bold md:text-6xl ${styleSubTitle}`}
    >
      {text}
      <hr
        className={`mx-auto my-4 h-1 w-6 rounded border-0 bg-primary ${styleLine}`}
      />
    </h2>
  );
};
