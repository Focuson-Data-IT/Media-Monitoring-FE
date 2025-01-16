'use client';

import React, {useEffect, useState} from "react";
import {TFairDetailBar} from "@/app/(customer)/perform/constants";
import request from "@/utils/request";
import moment from "moment";
import OurLoading from "@/components/OurLoading";
import OurEmptyData from "@/components/OurEmptyData";
import {followersValueFormatter} from "@/utils/numberFormatter";

const FairDetailBar: React.FC<TFairDetailBar> = ({label, description, unit, period}) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [fairChartData, setFairChartData] = useState<any>(null);
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // Tambahkan state untuk urutan

	const getFairChartData = async (payload: any) => {
		const url = `/get${label}?customer_username=bapendabdg@focuson.com&start_date=${moment(payload?.startDate)?.format("YYYY-MM-DD")}&end_date=${moment(payload?.endDate || payload?.startDate)?.format("YYYY-MM-DD")}`;
		const response = await request.get(url);

		const newResponse = response.data?.data?.map((v: any) => {
			return {
				...v,
				percentage: (v.value / v.max_value) * 100,
			};
		});

		setFairChartData(newResponse);
	};

	const sortData = () => {
		if (fairChartData) {
			const sortedData = [...fairChartData].sort((a, b) =>
				sortOrder === 'asc' ? a.value - b.value : b.value - a.value
			);
			setFairChartData(sortedData);
			setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle urutan
		}
	};

	useEffect(() => {
		if (period) {
			getFairChartData(period).then(() => {
				setLoading(false);
			});
		}
	}, [period]);

	return (
		<div
			className={`${loading ? 'bg-gray-200 animate-pulse' : ''} flex-1 xl:block shadow-[4px_0_8px_rgba(0,0,0,0.05)]`}
		>
			<div className="h-full w-full rounded-lg bg-white dark:bg-darkblack-600">
				{loading ? (
					<div className={`flex items-center justify-center h-full`}>
						<OurLoading/>
					</div>
				) : (
					<>
						<div
							className="flex items-center justify-between border-b border-bgray-300 p-5 py-3 dark:border-darkblack-400"
						>
							<h3 className="text-xl font-bold text-bgray-900 dark:text-white flex items-center space-x-2">
								<span>{label}</span>
								<span className="relative group">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 16h-1v-4h-1m1-4h.01M12 6.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19z"
										/>
									</svg>
									<span
										className="absolute bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 pointer-events-none"
									>
										{description}
									</span>
								</span>
							</h3>
							{/* Tambahkan ikon sort */}
							<button
								onClick={sortData}
								className="text-gray-500 hover:text-gray-700"
								title="Sort"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M3 6h18M3 12h12M3 18h6"/>
								</svg>
							</button>
						</div>
						{fairChartData?.length ? (
							<div
								className="flex flex-col h-[300px] p-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700">
								{fairChartData.map((v: any, key: number) => (
									<div className="flex items-center mb-2" key={key}>
										<div className="flex-1">
											<div className="mb-2 flex justify-between">
												<span className="text-sm font-medium text-bgray-900 dark:text-white">
													{v.username}
												</span>
												<span className="text-sm font-medium dark:text-white">
													{label === 'Followers'
														? followersValueFormatter(v.value)
														: v.value}{' '}
													{unit}
												</span>
											</div>
											<div
												className="relative h-[14px] w-full overflow-hidden rounded bg-bgray-100">
												<div
													style={{width: `${v?.percentage || 0}%`}}
													className={`absolute left-0 top-0 h-full rounded ${
														v?.percentage <= 30
															? 'bg-danger-300'
															: v?.percentage > 30 && v?.percentage <= 60
																? 'bg-warning-300'
																: 'bg-success-300'
													}`}
												></div>
											</div>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className={`flex items-center justify-center h-[300px]`}>
								<OurEmptyData width={100}/>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};


export default FairDetailBar;
