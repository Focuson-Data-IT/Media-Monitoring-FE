'use client';

import React, {useState} from "react";
import FairScoreChart from "@/app/(customer)/perform/components/FairScoreChart";
import FairDetailBar from "@/app/(customer)/perform/components/FairDetailBar";
import TopRanking from "@/app/(customer)/perform/components/TopRanking";
import PostsTable from "@/app/(customer)/perform/components/PostsTable";
import moment from "moment/moment";

const Perform = () => {
	const [parentPeriod, setParentPeriod] = useState({
		startDate: moment().toDate(),
		endDate: moment().toDate()
	});

	const [parentSelectedOptions, setParentSelectedOption] = useState(null);

	const [selectedPlatform, setSelectedPlatform] = useState("Instagram"); // State for platform selection

	const handlePlatformChange = (platform) => {
		setSelectedPlatform(platform);
	};

	return (
		<>
			{/* Tabs for platform selection */}
			<div className="mb-5 border-b border-gray-200 dark:border-gray-700">
				<ul className="flex -mb-px text-md font-bold text-center">
					<li className="mr-2">
						<button
							className={`inline-block p-4 rounded-t-lg border-b-2 ${
								selectedPlatform === "Instagram"
									? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
									: "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
							}`}
							onClick={() => setSelectedPlatform("Instagram")}
						>
							Instagram
						</button>
					</li>
					<li className="mr-2">
						<button
							className={`inline-block p-4 rounded-t-lg border-b-2 ${
								selectedPlatform === "TikTok"
									? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
									: "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
							}`}
							onClick={() => setSelectedPlatform("TikTok")}
						>
							TikTok
						</button>
					</li>
				</ul>
			</div>

			{/* Main content */}
			<h1 className="text-2xl font-bold text-bgray-900 dark:text-bgray-50 lg:text-3xl lg:leading-[36.4px] mb-5">
				Competitor {selectedPlatform}
			</h1>

			<div className="flex flex-col lg:flex-row lg:space-x-6 w-full">
				<div className="mb-6 w-full lg:mb-0 lg:flex-[7]">
					<FairScoreChart
						setParentPeriod={setParentPeriod}
						setParentSelectedOption={setParentSelectedOption}
					/>
				</div>

				<div className="w-full lg:flex-[3]">
					<TopRanking
						period={parentPeriod}
						options={parentSelectedOptions}

					/>
				</div>
			</div>

			<h1 className="text-2xl font-bold text-bgray-900 dark:text-bgray-50 lg:text-3xl lg:leading-[36.4px] mb-5">FAIR</h1>
			<div className="2xl:flex 2xl:space-x-[30px] mb-5">
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar
						label={"Followers"}
						description={'Informasi jumlah followers'}
						unit={""}
						period={parentPeriod}
						options={parentSelectedOptions}
					/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar
						label={"Activities"}
						description={'Informasi rata-rata aktifitas perhari'}
						unit={"Post /day"}
						period={parentPeriod}
						options={parentSelectedOptions}
					/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar
						label={"Interactions"}
						description={'Informasi rata-rata interaksi perhari'}
						unit={"Likes /post"}
						period={parentPeriod}
						options={parentSelectedOptions}
					/>
				</div>
				<div className="w-full 2xl:flex-1 mb-5">
					<FairDetailBar
						label={"Responsiveness"}
						description={'Informasi persentase responsifitas'}
						unit={"%"}
						period={parentPeriod}
						options={parentSelectedOptions}
					/>
				</div>
			</div>

			<div className="2xl:flex 2xl:space-x-[48px] mb-5">
				<PostsTable/>
			</div>
		</>
	);
};

export default Perform;

