import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import React, { MouseEventHandler, SetStateAction } from "react";

export type OptionProps = {
	title: string;
	value: string;
};

export type FooterLink = {
	title: string;
	links: { title: string; url: string }[];
};

export type FooterLinks = FooterLink[];

export type NavLinks = {
	name: string;
	href: string;
};

export type SocialLinks = {
	icon: JSX.Element;
	title: string;
	href: string;
};

export type SearchBarProps = {
	setModel: React.Dispatch<SetStateAction<string>>;
	setManufacturer: React.Dispatch<React.SetStateAction<string>>;
};

export type SearchManufacturerProps = {
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export interface FilterProps {
	manufacturer?: string;
	year?: number;
	model?: string;
	limit?: number;
	fuel?: string;
}

export interface CustomFilterProps<T> {
	title: string;
	options: OptionProps[];
	setFilter: (selected: T) => void;
}

export interface HomeProps {
	searchParams: FilterProps;
}

export interface CarProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}

export type CarState = CarProps[] & { message?: string };

export interface CarCardProps {
	model: string;
	make: string;
	mpg: number;
	transmission: string;
	year: number;
	drive: string;
	cityMPG: number;
}

export interface CustomButtonProps {
	isDisabled?: boolean;
	btnType?: "button" | "submit";
	title: string;
	rightIcon?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
