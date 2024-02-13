// import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import "./index.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "./provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Car Showcase",
	description: "Discover world's best car showcase application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className="wrapper">
					<ReduxProvider>
						<Header />
						{children}
						<Footer />
					</ReduxProvider>
				</div>
			</body>
		</html>
	);
}
