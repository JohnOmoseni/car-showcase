"use client";

import { Button } from "@/components/Button";
import { Dispatch } from "@reduxjs/toolkit";
import { SetStateAction } from "react";

type ShowMoreProps = {
	pageNumber: number;
	isNext: boolean;
	setLimit: (limit: number) => void;
};

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
	const handleNavigation = () => {
		// Calculate the new limit based on the page number and navigation type

		const newLimit = (pageNumber + 1) * 10;
		setLimit(newLimit);
	};

	return (
		<div className="w-full flex-row gap-5 mt-10 mx-auto">
			{!isNext && (
				<Button btnType="button" title="Show More" onClick={handleNavigation} />
			)}
		</div>
	);
};

export default ShowMore;
