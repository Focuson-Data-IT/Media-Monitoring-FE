'use client';

import React, {useEffect, useState} from "react";
import {TFairDetailBar} from "@/app/(customer)/perform/constants";
import request from "@/utils/request";
import moment from "moment";

const FairDetailBar: React.FC<TFairDetailBar> = ({label, unit, period}) => {
	const [percentage, setPercentage] = useState(60);

	const [followersChartLoading, setFollowersChartLoading] = useState<boolean>(true);
	const [interactionsChartLoading, setInteractionsChartLoading] = useState<boolean>(true);
	const [activitiesChartLoading, setActivitiesChartLoading] = useState<boolean>(true);

	const [responsivenessChartLoading, setResponsivenessChartLoading] = useState<boolean>(true);
	const [fairChartData, setFairChartData] = useState<any>(null);

	const getFairChartData = async (payload) => {
		const url = `/get${label}?customer_username=kemenkoinfra&start_date=${moment(payload?.startDate)?.format("YYYY-MM-DD")}&end_date=${moment(payload?.endDate || payload?.startDate)?.format("YYYY-MM-DD")}`;
		const response = await request.get(url);

		setFairChartData(response.data.data)
	}

	useEffect(() => {
		if (period) {
			getFairChartData(period).then(() => {
				setFollowersChartLoading(false)
				setInteractionsChartLoading(false)
				setActivitiesChartLoading(false)
				setResponsivenessChartLoading(false)
			})
		}
	}, [period]);

	return (
		<div className="flex-1 xl:block shadow-[4px_0_8px_rgba(0,0,0,0.05)]">
			<div
				className="h-full w-full rounded-lg bg-white p-5 dark:bg-darkblack-600"
			>
				<div className="flex items-center justify-between mb-3">
					<h3
						className="text-xl font-bold text-bgray-900 dark:text-white"
					>
						{label}
					</h3>
				</div>
				<div
					className="flex flex-col h-[300px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700">
					{fairChartData?.map((v) => {
						const percentage = v.value / v.max_value * 100;
						return (
							<div className="flex items-center mb-2">
								<div className="flex-1">
									<div className="mb-2 flex justify-between">
                              <span
								  className="text-sm font-medium text-bgray-900 dark:text-white"
							  >{v.username}</span
							  >
										<span className="text-sm font-medium dark:text-white"
										>{v.value} {unit}</span
										>
									</div>
									<div
										className="relative h-[14px] w-full overflow-hidden rounded bg-bgray-100"
									>
										<div
											style={{width: `${percentage}%`}}
											className={`absolute left-0 top-0 h-full rounded ${
												percentage <= 30
													? 'bg-danger-300'
													: percentage > 30 && percentage <= 60
														? 'bg-warning-300'
														: 'bg-success-300'
											}`}
										></div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default FairDetailBar;
