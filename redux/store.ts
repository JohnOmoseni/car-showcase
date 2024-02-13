import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AppStateReducer from "./features/appSlice";
import CarReducer from "./features/carSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Notice that appStateConfig specifies which segments of the store to persist. For example, it allows for the exclusion of sensitive data from storage.
// configure which key we want to persist
const appStateConfig = {
	key: "appState",
	storage: storage,
	whitelist: ["appState"],
};

const rootReducer = combineReducers({
	appState: persistReducer(appStateConfig, AppStateReducer),
	cars: CarReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
