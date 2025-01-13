'use client';

import React, {useState} from "react";
import FairScoreChart from "@/app/(customer)/perform/components/FairScoreChart";
import FairDetailBar from "@/app/(customer)/perform/components/FairDetailBar";
import TopRanking from "@/app/(customer)/perform/components/TopRanking";
import PostsTable from "@/app/(customer)/perform/components/PostsTable";

const Perform = () => {
	const [parentPeriod, setParentPeriod] = useState<{
		startDate: Date | string | null,
		endDate: Date | string | null
	}>(null)


	return (
		<>
			<h1 className="text-xl font-bold text-bgray-900 dark:text-bgray-50 lg:text-3xl lg:leading-[36.4px] mb-5">Competitor</h1>
			<div className="2xl:flex 2xl:space-x-[48px]">
				<div className="mb-6 w-full 2xl:mb-0 2xl:w-70">
					<FairScoreChart setParentPeriod={setParentPeriod}/>
				</div>
				<div className="w-full 2xl:flex-1">
					<TopRanking/>
				</div>
			</div>

			<h1 className="text-xl font-bold text-bgray-900 dark:text-bgray-50 lg:text-3xl lg:leading-[36.4px] mb-5">Fair</h1>
			<div className="2xl:flex 2xl:space-x-[48px] mb-5">
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar label={"Followers"} unit={"K"} period={parentPeriod}/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar label={"Activities"} unit={"/day"} period={parentPeriod}/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar label={"Interactions"} unit={"Likes /post"} period={parentPeriod}/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar label={"Responsiveness"} unit={"%"} period={parentPeriod}/>
				</div>
			</div>

			<div className="2xl:flex 2xl:space-x-[48px] mb-5">
				<PostsTable/>
			</div>
		</>
	)
}

export default Perform;
