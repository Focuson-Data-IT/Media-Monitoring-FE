'use client';

import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import {DrawerProvider, useDrawer} from "@/context/DrawerContext";

const CustomerLayout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
	const { isDrawerActive } = useDrawer();

	return (
		<DrawerProvider>
			<div className={`layout-wrapper ${isDrawerActive ? "active" : ""} w-full`}>
				<div className="relative flex w-full">
					<Sidebar/>
					<div
						className="body-wrapper flex-1 overflow-x-hidden dark:bg-darkblack-500"
					>
						<Navbar/>
						<main
							className="w-full px-6 pb-6 pt-[100px] sm:pt-[156px] xl:px-12 xl:pb-12"
						>
							{children}
						</main>
					</div>
				</div>
			</div>
		</DrawerProvider>
	)
}

export default CustomerLayout;
