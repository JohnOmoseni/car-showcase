"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// We are calling the persistStore method to persist the store before we pass it to the Provider.
// i.e persistStore(store)
const persistor = persistStore(store);

export default function ReduxProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>{children}</PersistGate>
		</Provider>
	);
}
