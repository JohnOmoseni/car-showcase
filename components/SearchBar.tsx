"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import SearchManufacturer from "./SearchManufacturer";
import { SearchBarProps } from "@/libs";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
	<button type="submit" className={` z-10 ${otherClasses}`}>
		<Image
			src={"/magnifying-glass.svg"}
			alt={"magnifying glass"}
			width={40}
			height={40}
			className="object-contain"
		/>
	</button>
);

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
	const [searchManufacturer, setSearchManufacturer] = useState("");
	const [searchModel, setSearchModel] = useState("");

	const router = useRouter();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
			return alert("Please provide some input");
		}

		setModel(searchModel);
		setManufacturer(searchManufacturer);
	};

	return (
		<form
			className="grid grid-cols-search max-md:w-full gap-4 relative"
			onSubmit={handleSearch}
		>
			<div className="flex-1 relative">
				<SearchManufacturer
					selected={searchManufacturer}
					setSelected={setSearchManufacturer}
				/>
			</div>
			<div className="search px-3 w-full flex-row relative bg-light-white rounded-lg max-sm:rounded-full">
				<Image
					src="/model-icon.png"
					width={25}
					height={25}
					className="-mt-1 block mr-2"
					alt="car searchModel"
				/>
				<input
					type="text"
					name="searchModel"
					value={searchModel}
					onChange={(e) => setSearchModel(e.target.value)}
					placeholder="Tiguan..."
					className="w-full i-reset relative text-sm h-[48px]"
				/>
			</div>
			<SearchButton otherClasses="" />
		</form>
	);
};

export default SearchBar;
