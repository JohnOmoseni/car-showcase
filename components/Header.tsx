"use client";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./Button";
import LinkRow from "./LinkRow";

type Props = {
	setOpenMenu?: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setOpenMenu }: Props) => {
	return (
		<header className="nav-parent absolute z-[999] flex-row !justify-between px-3 py-3 sm:px-[1.5%] bg-transparent top-3 inset-x-3 lg:inset-x-12 rounded-lg shadow-md overflow-hidden isolate">
			<div className="overlay"></div>
			<Link href="/" className="group flex transition-sm hover:scale-95">
				<Image
					src="/logo.svg"
					alt="logo"
					width={118}
					height={18}
					className="object-contain"
				/>
			</Link>

			<div
				className="block md:hidden"
				onClick={() => setOpenMenu && setOpenMenu(true)}
			>
				<HiOutlineMenuAlt4 size={20} color="#cbcbe8" />
			</div>

			<Button title="Sign in" className="uppercase hidden md:block" />
		</header>
	);
};

export default Header;
