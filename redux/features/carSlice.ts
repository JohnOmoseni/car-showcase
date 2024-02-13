import { CarProps } from "@/libs";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type StateProp = {
	allCars: CarProps[];
	selectedCar: CarProps | null;
};

const initialState: StateProp = {
	allCars: [],
	selectedCar: null,
};

const carSlice = createSlice({
	name: "cars",
	initialState: initialState,
	reducers: {
		setAllCars: (state, { payload }: PayloadAction<CarProps[]>) => {
			state.allCars = payload;
		},
	},
});

export default carSlice.reducer;
export const { setAllCars } = carSlice.actions;
