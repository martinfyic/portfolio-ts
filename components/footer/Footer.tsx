import NextLink from 'next/link';
import {
	AiOutlineGithub,
	AiOutlineLinkedin,
	AiOutlineMail,
} from 'react-icons/ai';

const actualYear = new Date().getFullYear();

export const Footer = () => {
	return (
		<footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
			<hr className="w-full h-0.5 mx-auto mt-8 border-0 bg-neutral-300" />
			<div className="mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between">
				<div className="font-semibold">&#169; {actualYear} Martin Ferreira</div>
				<div className="flex flex-row items-center justify-center space-x-2 mb-2">
					<NextLink href="https://github.com/martinfyic" target="_blank">
						<AiOutlineGithub
							size={30}
							className="hover:-translate-y-1 transition-transform cursor-pointer"
						/>
					</NextLink>
					<NextLink
						href="https://www.linkedin.com/in/martin-ferreira-yic/"
						target="_blank"
					>
						<AiOutlineLinkedin
							size={30}
							className="hover:-translate-y-1 transition-transform cursor-pointer"
						/>
					</NextLink>
					<NextLink href="mailto:martin.f.yic@gmail.com" target="_blank">
						<AiOutlineMail
							size={30}
							className="hover:-translate-y-1 transition-transform cursor-pointer"
						/>
					</NextLink>
				</div>
			</div>
		</footer>
	);
};
