import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/libs";
import { manufacturers } from "@/constants";
import Image from "next/image";

function SearchManufacturer({
	selected,
	setSelected,
}: SearchManufacturerProps) {
	const [query, setQuery] = useState("");

	const filteredManufacturers =
		query === ""
			? manufacturers
			: manufacturers.filter((item) => {
					return item.toLowerCase().includes(query.toLowerCase());
			  });

	return (
		<>
			<Combobox value={selected} onChange={setSelected}>
				<div className="search relative w-full px-4 max-sm:w-full flex-row !justify-start bg-light-white rounded-lg max-sm:rounded-full">
					<Combobox.Button className="mr-3 -mt-[1px]">
						<Image
							src="/car-logo.svg"
							width={25}
							height={25}
							className=""
							alt="car logo"
						/>
					</Combobox.Button>

					<Combobox.Input
						className="i-reset w-full h-[48px] "
						displayValue={(item: string) => item}
						onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
						placeholder="Volkswagen..."
					/>

					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options
							className="option absolute top-[110%] left-0 max-h-[160px] w-full overflow-y-auto rounded-b-md search backdrop-blur-sm py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
							static
						>
							{filteredManufacturers.length === 0 && query !== "" ? (
								<Combobox.Option
									value={query}
									className="search-manufacturer__option"
								>
									Create "{query}"
								</Combobox.Option>
							) : (
								filteredManufacturers.map((item) => (
									<Combobox.Option
										key={item}
										className={({ active }) =>
											`relative search-manufacturer__option ${
												active ? "bg-primary-blue text-white" : ""
											}`
										}
										value={item}
									>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${
														selected ? "font-medium" : "font-normal"
													}`}
												>
													{item}
												</span>

												{selected ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
															active
																? "text-white"
																: "text-pribg-primary-purple"
														}`}
													></span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</>
	);
}

export default SearchManufacturer;
