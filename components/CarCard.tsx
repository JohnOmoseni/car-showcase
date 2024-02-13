"use client";

import { useState } from "react";
import Image from "next/image";

import { calculateCarRent, generateCarImageUrl } from "@/utils";
import { CarProps } from "@/libs";
import { Button } from "./Button";
import { useAppDispatch, useAppSelector } from "@/libs";
import CarDetails from "./CarDetails";

// import CarDetails from "./CarDetails";

interface CarCardProps {
	car: CarProps;
	allCars?: CarProps[];
}

const CarCard = ({ car, allCars }: CarCardProps) => {
	// const { allCars: cars } = useAppSelector((store) => store.cars);
	// const dispatch = useAppDispatch();
	const { city_mpg, year, make, model, transmission, drive } = car;

	const [isOpen, setIsOpen] = useState(false);

	const carRent = calculateCarRent(city_mpg, year);

	return (
		<div className="card group flex-column py-6 px-6 rounded-md">
			<div className="w-full flex-row-btwn !items-start gap-2">
				<h3 className="capitalize text-2xl">
					{make} {model}
				</h3>
			</div>

			<p className="flex-row mt-6 text-4xl leading-[38px] font-extrabold">
				<span className="self-start text-sm leading-[17px]">$</span>
				{carRent}
				<span className="self-end text-sm leading-[17px]">/day</span>
			</p>

			<div className="relative w-full h-40 my-3 object-contain">
				<Image
					src={generateCarImageUrl(car)}
					alt="car model"
					fill
					priority
					className="object-contain"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>

			<div className="relative flex-row w-full mt-2 ">
				<div className="flex group-hover:invisible w-full justify-between text-grey mx-2">
					<div className="flex-column !items-center gap-2">
						<Image
							src="/steering-wheel.svg"
							width={20}
							height={20}
							alt="steering wheel"
						/>
						<p className="text-sm leading-[17px]">
							{transmission === "a" ? "Automatic" : "Manual"}
						</p>
					</div>
					<div className="flex-column !items-center gap-2">
						<Image src="/tire.svg" width={20} height={20} alt="seat" />
						<p className="text-sm leading-[17px]">{drive.toUpperCase()}</p>
					</div>
					<div className="flex-column !items-center gap-2">
						<Image src="/gas.svg" width={20} height={20} alt="seat" />
						<p className="text-sm leading-[17px]">{city_mpg} MPG</p>
					</div>
				</div>

				<div className="hidden group-hover:flex-row absolute bottom-0 w-full z-10">
					<Button title="View More" onClick={() => setIsOpen(true)} />
				</div>
			</div>

			<CarDetails
				isOpen={isOpen}
				closeModal={() => setIsOpen(false)}
				car={car}
			/>
		</div>
	);
};

export default CarCard;
