'use client';

import React, {useEffect, useState} from "react";
import FairScoreChart from "@/app/(customer)/perform/components/FairScoreChart";
import FairDetailBar from "@/app/(customer)/perform/components/FairDetailBar";
import TopRanking from "@/app/(customer)/perform/components/TopRanking";
import PostsTable from "@/app/(customer)/perform/components/PostsTable";
import request from "@/utils/request";

const Perform = () => {
	const [followersChartLoading, setFollowersChartLoading] = useState<boolean>(true);
	const [interactionsChartLoading, setInteractionsChartLoading] = useState<boolean>(true);
	const [activitiesChartLoading, setActivitiesChartLoading] = useState<boolean>(true);
	const [responsivenessChartLoading, setResponsivenessChartLoading] = useState<boolean>(true);

	const [fairChartData, setFairChartData] = useState<any>(null);

	const getFairChartData = async () => {
		const followers = await request.get('/getFollowers');
		const activities = await request.get('/getActivities');
		const interactions = await request.get('/getInteractions');
		const responsiveness = await request.get('/getResponsiveness');

		const fairResponse = {
			followers: followers.data.data,
			activities: activities.data.data,
			interactions: interactions.data.data,
			responsiveness: responsiveness.data.data
		};

		setFairChartData(fairResponse)
	}

	useEffect(() => {
		getFairChartData().then(() => {
			setFollowersChartLoading(false)
			setInteractionsChartLoading(false)
			setActivitiesChartLoading(false)
			setResponsivenessChartLoading(false)
		})
	}, []);

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
			<div className="2xl:flex 2xl:space-x-[48px] mb-5">
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar data={fairChartData?.followers} label={"Followers"} unit={"K"}
								   isLoading={followersChartLoading}/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar data={fairChartData?.activities} label={"Activity"} unit={"/day"}
								   isLoading={interactionsChartLoading}/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar data={fairChartData?.interactions} label={"Interaction"} unit={"/post"}
								   isLoading={activitiesChartLoading}/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar data={fairChartData?.responsiveness} label={"Responsiveness"} unit={"%"}
								   isLoading={responsivenessChartLoading}/>
				</div>
			</div>

			<div className="2xl:flex 2xl:space-x-[48px] mb-5">
				<PostsTable/>
			</div>
		</>
	)
}

export default Perform;
