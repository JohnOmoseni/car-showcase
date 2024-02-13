import { footerLinks } from "@/constants/navLinks";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type SocialLinksProps = {
	title: string;
	href: string;
	icon?: ReactNode;
};

export const SocialLinks = ({ href, title, icon }: SocialLinksProps) => (
	<a
		href={href}
		aria-label={title}
		target="_blank"
		rel="noreferrer"
		title={title}
		className="w-8 h-8 rounded-full icon border border-solid border-[#8790AE] bg-black"
	>
		{icon}
	</a>
);

function Footer() {
	return (
		<footer className="mt-auto px-4 pt-5 sm:px-[3%] pb-5 border-t border-br-light border-opacity-60 text-gray-500">
			<div className="flex-row gap-4 !justify-between">
				<p className="text-base whitespace-nowrap">
					Carhub 2023. <br className="sm:hidden" />
					All Rights Reserved &copy;
				</p>
				<div className="flex-1 hidden md:flex-row">
					<Image
						src="/logo.svg"
						alt="CarShowcase"
						width={120}
						height={60}
						className="object-contain "
					/>
				</div>
				<div className="flex-row text-center gap-4 leading-5">
					<Link href="/" className="">
						Privacy & Policy
					</Link>
					<Link href="/" className="">
						Terms & Condition
					</Link>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
