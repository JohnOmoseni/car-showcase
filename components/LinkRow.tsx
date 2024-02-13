"use client";

import { motion } from "framer-motion";
import { navAnimate } from "@/utils";
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

type NavLinkProps = React.PropsWithChildren<LinkProps> & {
	idx: number;
	name: string;
	exact?: boolean;
	onClick?: () => void;
};

function LinkRow({ href, idx, name, exact, onClick }: NavLinkProps) {
	// Cast href to a string using toString() method
	const hrefAsString: string = href.toString();
	const pathname = usePathname();

	const link = `relative w-max flex-row py-1.5 px-2 uppercase !text-[0.76rem] whitespace-nowrap rounded-full transition-sm transition-colors hover:text-yellow hover:scale-105 hover:text-shadow-100`;
	const activeLink = `${link} !text-yellow tracking-wide`;

	const isActive = exact
		? pathname === href
		: pathname.startsWith(hrefAsString);

	return (
		<motion.div
			variants={navAnimate}
			initial="hidden"
			whileInView="animate"
			viewport={{ once: true, amount: 0.2 }}
			custom={idx}
		>
			<Link
				href={href}
				className={isActive ? activeLink : link}
				onClick={onClick}
			>
				{name}
			</Link>
		</motion.div>
	);
}

export default LinkRow;
