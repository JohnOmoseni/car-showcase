"use client";

import { twMerge } from "tailwind-merge";

type Props = {
	title: string;
	className?: string;
	btnType?: "button" | "submit";
	onClick?: () => void;
};

export const Button = ({ title, className, btnType, onClick }: Props) => {
	return (
		<button
			type={btnType || "button"}
			onClick={onClick}
			className={twMerge(
				"btn py-1.5 px-4 text-base min-w-[130px] relative rounded-full overflow-hidden transition-sm hover:rotate-1",
				className
			)}
		>
			{title}
		</button>
	);
};
