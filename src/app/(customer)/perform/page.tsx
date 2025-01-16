'use client';

import React, {useState} from "react";
import FairScoreChart from "@/app/(customer)/perform/components/FairScoreChart";
import FairDetailBar from "@/app/(customer)/perform/components/FairDetailBar";
import TopRanking from "@/app/(customer)/perform/components/TopRanking";
import PostsTable from "@/app/(customer)/perform/components/PostsTable";
import moment from "moment/moment";
import {TPeriodInput} from "@/components/constants";

const Perform = () => {
	const [parentPeriod, setParentPeriod] = useState<TPeriodInput>({
		startDate: moment().toDate(),
		endDate: moment().toDate()
	});

	const [parentSelectedOptions, setParentSelectedOption] = useState<Array<{
		label: string;
		value: string;
	}> | null>(null);

	return (
		<>
			<h1 className="text-2xl font-bold text-bgray-900 dark:text-bgray-50 lg:text-3xl lg:leading-[36.4px] mb-5">Competitor</h1>
			<div className="flex flex-col lg:flex-row lg:space-x-6 w-full">
				{/* FairScoreChart - 70% pada lg */}
				<div className="mb-6 w-full lg:mb-0 lg:flex-[7]">
					<FairScoreChart setParentPeriod={setParentPeriod}
									setParentSelectedOption={setParentSelectedOption}/>
				</div>

				{/* TopRanking - 30% pada lg */}
				<div className="w-full lg:flex-[3]">
					<TopRanking period={parentPeriod} options={parentSelectedOptions}/>
				</div>
			</div>

			<h1 className="text-2xl font-bold text-bgray-900 dark:text-bgray-50 lg:text-3xl lg:leading-[36.4px] mb-5">FAIR</h1>
			<div className="2xl:flex 2xl:space-x-[48px] mb-5">
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar label={"Followers"} unit={"K"} period={parentPeriod}
								   options={parentSelectedOptions}/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar label={"Activities"} unit={"/day"} period={parentPeriod}
								   options={parentSelectedOptions}/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar label={"Interactions"} unit={"Likes /post"} period={parentPeriod}
								   options={parentSelectedOptions}/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar label={"Responsiveness"} unit={"%"} period={parentPeriod}
								   options={parentSelectedOptions}/>
				</div>
			</div>

			<div className="2xl:flex 2xl:space-x-[48px] mb-5">
				<PostsTable/>
			</div>
		</>
	)
}

export default Perform;
