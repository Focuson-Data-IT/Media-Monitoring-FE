import React from "react";
import Sidebar from "@/component/Sidebar";
import Navbar from "@/component/Navbar";

const CustomerLayout = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
	return (
		<div className="layout-wrapper active w-full">
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
	)
}

export default CustomerLayout;
