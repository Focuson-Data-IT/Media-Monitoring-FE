'use client';

import React from "react";
import FairScoreChart from "@/app/(customer)/perform/component/FairScoreChart";
import FairDetailBar from "@/app/(customer)/perform/component/FairDetailBar";
import TopRanking from "@/app/(customer)/perform/component/TopRanking";

const Perform = () => {
	return (
		<>
			<h1 className="text-xl font-bold text-bgray-900 dark:text-bgray-50 lg:text-3xl lg:leading-[36.4px] mb-5">Competitor</h1>
			<div className="2xl:flex 2xl:space-x-[48px]">
				<div className="mb-6 w-full 2xl:mb-0 2xl:w-70">
					<FairScoreChart/>
				</div>
				<div className="w-full 2xl:flex-1">
					<TopRanking/>
				</div>
			</div>

			<h1 className="text-xl font-bold text-bgray-900 dark:text-bgray-50 lg:text-3xl lg:leading-[36.4px] mb-5">Fair</h1>

			<div className="2xl:flex 2xl:space-x-[48px]">
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar data={null} label={"Followers"} unit={"K"}/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar data={null} label={"Activity"} unit={"/day"}/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar data={null} label={"Interaction"} unit={"/post"}/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar data={null} label={"Responsiveness"} unit={"%"}/>
				</div>
			</div>
		</>
	)
}

export default Perform;
