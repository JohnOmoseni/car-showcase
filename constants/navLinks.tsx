import { RxDiscordLogo } from "react-icons/rx";
import { PiInstagramLogoLight, PiTwitterLogoFill } from "react-icons/pi";
import { TbBrandFacebookFilled } from "react-icons/tb";

export const navLinks = [
	{
		name: "Home",
		href: "/dapp",
	},
	{
		name: "Leaderboard",
		href: "/standings",
	},
	{
		name: "Analytics",
		href: "/analytics",
	},
	{
		name: "Position",
		href: "/position",
	},
	{
		name: "Funding",
		href: "/funding",
	},
];

export const footerLinks = [
	{
		title: "About",
		links: [
			{ title: "How it works", url: "/" },
			{ title: "Featured", url: "/" },
			{ title: "Partnership", url: "/" },
			{ title: "Bussiness Relation", url: "/" },
		],
	},
	{
		title: "Company",
		links: [
			{ title: "Events", url: "/" },
			{ title: "Blog", url: "/" },
			{ title: "Podcast", url: "/" },
			{ title: "Invite a friend", url: "/" },
		],
	},
	{
		title: "Socials",
		links: [
			{ title: "Discord", url: "/" },
			{ title: "Instagram", url: "/" },
			{ title: "Twitter", url: "/" },
			{ title: "Facebook", url: "/" },
		],
	},
];

export const socialLinks = [
	{
		icon: <TbBrandFacebookFilled className="text-amber-600 text-[1rem]" />,
		title: "Facebook",
		href: "https://web.facebook.com/groups/1789015331551141/?_rdc=1&_rdr",
	},
	{
		icon: <PiInstagramLogoLight className="text-amber-600 text-[1rem]" />,
		title: "Instagram",
		href: "https://www.instagram.com/extinction_001/",
	},
	{
		icon: <PiTwitterLogoFill className="text-amber-600 text-[1rem]" />,
		title: "Twitter",
		href: "https://twitter.com/Infinitewealt",
	},
	{
		icon: <RxDiscordLogo className="text-amber-600 text-lg" />,
		title: "Discord",
		href: "https://discord.com/invite/yZNvXqa53D",
	},
];
