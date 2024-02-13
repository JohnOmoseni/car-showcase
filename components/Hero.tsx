"use client";

import Image from "next/image";
import { Button } from "./Button";

type Props = {};

const Hero = (props: Props) => {
	const handleScroll = () => {
		const nextSection = document.getElementById("discover");

		if (nextSection) {
			nextSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<Image width={1428} height={892} className="one" alt="one" src="/1.png" />
			<Image
				width={2400}
				height={2821}
				className="lights"
				alt="lights"
				src="/Lights.png"
			/>
			<Image
				width={1634}
				height={1240}
				className="Galaxy"
				alt="Galaxy"
				src="/Galaxy.png"
			/>
			<Image
				width={520}
				height={383}
				className="vector5"
				alt="vector5"
				src="/Vector 5.png"
			/>
			<Image
				width={1420}
				height={1219.62646484375}
				className="vector4"
				alt="vector4"
				src="/Vector 4.png"
			/>
			<Image
				width={819.5}
				height={858}
				className="intersect"
				alt="intersect"
				src="/Intersect.png"
			/>
			<div className="lg:flex-row flex-column gap-6 relative ">
				<div className="flex-1 pt-32 lg:pt-44 max-sm:mx-3 lg:pl-[5%]">
					<div className="solution lg:absolute left-[50%] top-[6rem] lg:translate-x-[-50%] max-lg:mx-auto my-2">
						Software Solutions House
					</div>
					<h1 className="big-title max-lg:text-center">
						Find, book, rent a car—quick and super easy!
					</h1>

					<p className="text-xl font-light mt-5 max-lg:text-center lg:max-w-[45ch]">
						Streamline your car rental experience with our effortless booking
						process.
					</p>

					<Button
						title="Explore Cars"
						className="flex-row max-lg:mx-auto mt-14 lg-mt-10"
					/>
				</div>

				<div className="lg:flex-[1.2] flex justify-center w-full lg:h-screen">
					<div className=" relative lg:w-full w-[600px] lg:h-full max-sm:h-[400px] h-[590px] z-0 md:mt-[10%]">
						<Image src="/hero.png" alt="hero" fill className="object-contain" />
					</div>

					<div className="absolute lg:top-10 lg:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full lg:h-screen max-sm:-right-[30%] max-sm:h-[360px] h-[590px] overflow-hidden" />
				</div>
			</div>
		</>
	);
};

export default Hero;
