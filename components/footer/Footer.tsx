import NextLink from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const actualYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="mx-auto mt-8 h-0.5 w-full border-0 bg-neutral-300" />
      <div className="mx-auto flex flex-col p-4 text-center md:flex-row md:justify-between">
        <div className="font-semibold">
          &#169; {actualYear} Martin Ferreira 👋
        </div>
        <div className="mb-2 flex flex-row items-center justify-center space-x-2">
          <NextLink
            href="https://github.com/martinfyic"
            target="_blank"
            aria-label="Personal github"
          >
            <AiOutlineGithub
              size={30}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </NextLink>
          <NextLink
            href="https://www.linkedin.com/in/martin-ferreira-yic/"
            target="_blank"
            aria-label="Navigate to personal linkedin"
          >
            <AiOutlineLinkedin
              size={30}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </NextLink>
          <NextLink
            href="mailto:martin.f.yic@gmail.com"
            target="_blank"
            aria-label="Personal email"
          >
            <AiOutlineMail
              size={30}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </NextLink>
        </div>
      </div>
    </footer>
  );
};
