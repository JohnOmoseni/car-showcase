"use client";

import Image from "next/image";
import CarCard from "@/components/CarCard";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFIlter";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/Showmore";
import { fetchCars } from "@/utils";
import { useEffect, useState } from "react";
import { CarState } from "@/libs";
// import allCars from "../test.json";

import "./utils.css";

export default function Home() {
	const [allCars, setAllCars] = useState<CarState>([]);
	const [loading, setLoading] = useState(false);
	const [manufacturer, setManufacturer] = useState("");
	const [model, setModel] = useState("");

	const [fuel, setFuel] = useState("");
	const [year, setYear] = useState(2022);
	const [limit, setLimit] = useState(10);

	const getCars = async () => {
		setLoading(true);
		try {
			const res = await fetchCars({
				manufacturer: manufacturer,
				model,
				fuel,
				year,
				limit,
			});

			setAllCars(res);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getCars();
	}, [fuel, year, limit, manufacturer, model]);

	const isNext = limit > allCars.length;

	return (
		<main className="max-width relative mb-10">
			<Hero />
			<div
				className="mt-[7rem] sm:mt-[10rem] px-[4%] text-[#9d9db4]"
				id="discover"
			>
				<div className="">
					<h2 className="text-4xl font-bold text-gradient-200">
						Car Catalogue
					</h2>
					<p className="text-base my-1 tracking-wide px-[2px]">
						Explore out cars you might like
					</p>
				</div>

				<div className="mt-6">
					<div className="md:flex-row flex-column md:!justify-between gap-8 max-md:gap-6">
						<SearchBar setManufacturer={setManufacturer} setModel={setModel} />

						<div className="flex-row !justify-end gap-3 max-md:w-full">
							<CustomFilter title="fuel" setFilter={setFuel} options={fuels} />
							<CustomFilter
								title="year"
								setFilter={setYear}
								options={yearsOfProduction}
							/>
						</div>
					</div>

					{allCars.length > 0 ? (
						<>
							<ul className="my-[4rem] grid grid-cols-catalogue gap-6 mx-auto">
								{allCars?.map((car, idx) => {
									return <CarCard key={idx} car={car} allCars={allCars} />;
								})}
							</ul>

							{loading && (
								<div className="mt-16 w-full flex-row">
									<Image
										src="/loader.svg"
										alt="loader"
										width={50}
										height={50}
										className="object-contain"
									/>
								</div>
							)}

							<ShowMore
								pageNumber={limit / 10}
								isNext={isNext}
								setLimit={setLimit}
							/>
						</>
					) : (
						<div className="min-h-[40vh] icon py-[3rem]">
							<div>
								<h2>Oops, no results</h2>
								<p>{allCars?.message}</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
