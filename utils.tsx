import { CarProps, FilterProps } from "@/libs";

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
	// Get the current URL search params
	const searchParams = new URLSearchParams(window.location.search);

	// Set the specified search parameter to the given value
	searchParams.set(type, value);

	// Set the specified search parameter to the given value
	const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

	return newPathname;
};

export const deleteSearchParams = (type: string) => {
	// Set the specified search parameter to the given value
	const newSearchParams = new URLSearchParams(window.location.search);

	// Delete the specified search parameter
	newSearchParams.delete(type.toLocaleLowerCase());

	// Construct the updated URL pathname with the deleted search parameter
	const newPathname = `${
		window.location.pathname
	}?${newSearchParams.toString()}`;

	return newPathname;
};

export async function fetchCars(filters: FilterProps) {
	const { manufacturer, year, model, limit, fuel } = filters;

	// Set the required headers for the API request
	const headers: HeadersInit = {
		"X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	};

	// Set the required headers for the API request
	const response = await fetch(
		`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
		{
			headers: headers,
		}
	);

	// const response = await fetch(
	// 	`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3`,
	// 	{
	// 		headers: {
	// 			"X-RapidAPI-Key": "2ef61d7761msh5a3d17f7c231ea2p12b62ajsn67e3e8aaaac0",
	// 			"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	// 		},
	// 	}
	// );

	// Parse the response as JSON
	const result = await response.json();

	return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	const url = new URL("https://cdn.imagin.studio/getimage");
	const { make, model, year } = car;

	url.searchParams.append("customer", "hrjavascript-mastery");
	url.searchParams.append("make", make);
	url.searchParams.append("modelFamily", model.split(" ")[0]);
	url.searchParams.append("zoomType", "fullscreen");
	url.searchParams.append("modelYear", `${year}`);
	url.searchParams.append("angle", `${angle}`);

	return `${url}`;
};

export const container = {
	hidden: { opacity: 0, x: "100vw" },
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 1.6,
			duration: 0.8,
			type: "spring",
			mass: 0.3,
			ease: "easeIn",
			when: "beforeChildren",
			delayChildren: 0.2,
			staggerChildren: 0.4,
		},
	},
	exit: {
		x: "100vw",
		opacity: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};

export const variant = {
	hidden: { opacity: 0, y: 20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			type: "spring",
			delay: 1.8,
		},
	},
};

export const listAnimate = {
	hidden: { opacity: 0, y: 60 },
	animate: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: custom * 0.1,
			duration: 0.8,
			type: "spring",
		},
	}),
};

export const navAnimate = {
	hidden: { y: -50, opacity: 0 },
	animate: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.3,
			duration: 0.8,
			type: "spring",
		},
	}),
};
