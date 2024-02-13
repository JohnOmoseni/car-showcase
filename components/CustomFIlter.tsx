"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/libs";

export default function CustomFilter<T>({
	title,
	options,
	setFilter,
}: CustomFilterProps<T>) {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div className="w-fit">
			<Listbox
				value={selected}
				onChange={(e) => {
					setSelected(e);
					setFilter(e.value as unknown as T);
				}}
			>
				<div className="relative w-fit z-10 ">
					<Listbox.Button className="search relative !bg-[#07074c96] bg-opacity-80 w-full min-w-[127px] flex-row-btwn cursor-default rounded-lg py-2 px-3 shadow-md text-left text-sm">
						<span className="block truncate">{selected.title}</span>
						<Image
							src="/chevron-up-down.svg"
							width={20}
							height={20}
							className="ml-4 object-contain"
							alt="chevron_up-down"
						/>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="option absolute mt-1 max-h-60 w-full overflow-y-auto rounded-b-md backdrop-blur-sm py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm ">
							{options.map((option) => (
								<Listbox.Option
									key={option.title}
									className={({ active }) =>
										`relative cursor-default select-none py-2 px-4 search last-of-type:rounded-b-md ${
											active ? "bg-primary-blue text-white" : ""
										}`
									}
									value={option}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected ? "font-medium" : "font-normal"
												}`}
											>
												{option.title}
											</span>
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
}
