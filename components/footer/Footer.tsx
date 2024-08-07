import { siteConfig } from "@/config/site";
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
          <a
            href={siteConfig.links.github}
            target="_blank"
            aria-label="Personal github"
            title="Personal github"
            rel="noreferrer"
          >
            <AiOutlineGithub
              size={30}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            aria-label="Navegar a mi Linkedin"
            title="Navegar a mi Linkedin"
            rel="noreferrer"
          >
            <AiOutlineLinkedin
              size={30}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </a>
          <a
            href={`mailto:${siteConfig.mail}`}
            target="_blank"
            aria-label="Email personal"
            title="Email personal"
          >
            <AiOutlineMail
              size={30}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
