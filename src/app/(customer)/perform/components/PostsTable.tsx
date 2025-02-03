import React, {useEffect, useState} from "react";
import request from "@/utils/request";
import OurEmptyData from "@/components/OurEmptyData";
import moment from "moment";
import OurLoading from "@/components/OurLoading";
import {redirect} from "next/navigation";

const PostsTable = ({period, platform = 'Instagram'}) => {
	const user = JSON.parse(localStorage.getItem('user')) || null;
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [averageLikes, setAverageLikes] = useState(0);

	const getPosts = async () => {
		setLoading(true);
		const response = await request.get(`/getAllPost?kategori=${user?.username}&start_date=${moment(period?.startDate)?.format("YYYY-MM-DD")}&end_date=${moment(period?.endDate || period?.startDate)?.format("YYYY-MM-DD")}`);

		if (response.status === 200) {
			setPosts(response.data.data);
		}
	}

	useEffect(() => {
		getPosts().then(() => {
			setLoading(false);
		})
	}, [period]);

	useEffect(() => {
		const averageLikes = posts.length > 0
			? posts.reduce((sum, post) => sum + (post.likes || 0), 0) / posts.length
			: 0;

		setAverageLikes(averageLikes);
	}, [posts])

	return (

		<section className="mb-6 2xl:mb-0 2xl:flex-1 shadow-[4px_0_8px_rgba(0,0,0,0.05)]">

			<div
				className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600"
			>
				<div className="max-h-[500px] flex flex-col space-y-5">
					<div className="table-content w-full overflow-x-auto">
						<table className="w-full">
							<thead>
							<tr
								className="border-b border-bgray-300 dark:border-darkblack-400"
							>
								<th className="inline-block w-[250px] px-6 py-5 lg:w-auto xl:px-0">
									<div className="flex w-full items-center space-x-2.5">
								  <span
									  className="text-base font-medium text-bgray-600 dark:text-bgray-50"
								  >
									Username</span
								  >
										<span>
									<svg
										width="14"
										height="15"
										viewBox="0 0 14 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
									  <path
										  d="M10.332 1.31567V13.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M3.66602 13.3157V1.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									</svg>
								  </span>
									</div>
								</th>
								<th className="px-6 py-5 xl:px-0">
									<div className="flex w-full items-center space-x-2.5">
								  <span
									  className="text-base font-medium text-bgray-600 dark:text-bgray-50"
								  >Content</span
								  >
										<span>
									<svg
										width="14"
										height="15"
										viewBox="0 0 14 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
									  <path
										  d="M10.332 1.31567V13.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M3.66602 13.3157V1.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									</svg>
								  </span>
									</div>
								</th>
								<th className="px-6 py-5 xl:px-0">
									<div className="flex items-center space-x-2.5">
								  <span
									  className="text-base font-medium text-bgray-600 dark:text-bgray-50"
								  >
									Date</span
								  >
										<span>
									<svg
										width="14"
										height="15"
										viewBox="0 0 14 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
									  <path
										  d="M10.332 1.31567V13.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M3.66602 13.3157V1.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									</svg>
								  </span>
									</div>
								</th>
								<th className="px-6 py-5 xl:w-[165px] xl:px-0">
									<div className="flex w-full items-center space-x-2.5">
								  <span
									  className="text-base font-medium text-bgray-600 dark:text-bgray-50"
								  >Like</span
								  >
										<span>
									<svg
										width="14"
										height="15"
										viewBox="0 0 14 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
									  <path
										  d="M10.332 1.31567V13.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M3.66602 13.3157V1.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									</svg>
								  </span>
									</div>
								</th>
								<th className="px-6 py-5 xl:w-[165px] xl:px-0">
									<div className="flex w-full items-center space-x-2.5">
								  <span className="text-base font-medium text-bgray-600"
								  >Comment</span
								  >
										<span>
									<svg
										width="14"
										height="15"
										viewBox="0 0 14 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
									  <path
										  d="M10.332 1.31567V13.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M3.66602 13.3157V1.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									</svg>
								  </span>
									</div>
								</th>
								<th className="px-6 py-5 xl:w-[165px] xl:px-0">
									<div className="flex w-full items-center space-x-2.5">
								  <span className="text-base font-medium text-bgray-600"
								  >View</span
								  >
										<span>
									<svg
										width="14"
										height="15"
										viewBox="0 0 14 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
									  <path
										  d="M10.332 1.31567V13.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M3.66602 13.3157V1.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									</svg>
								  </span>
									</div>
								</th>
								<th className="px-6 py-5 xl:w-[165px] xl:px-0">
									<div className="flex w-full items-center space-x-2.5">
								  <span className="text-base font-medium text-bgray-600"
								  >Reach</span
								  >
										<span>
									<svg
										width="14"
										height="15"
										viewBox="0 0 14 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
									  <path
										  d="M10.332 1.31567V13.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M3.66602 13.3157V1.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									</svg>
								  </span>
									</div>
								</th>
								<th className="px-6 py-5 xl:w-[165px] xl:px-0">
									<div className="flex w-full items-center space-x-2.5">
								  <span className="text-base font-medium text-bgray-600"
								  >Impression</span
								  >
										<span>
									<svg
										width="14"
										height="15"
										viewBox="0 0 14 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
									  <path
										  d="M10.332 1.31567V13.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M3.66602 13.3157V1.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									</svg>
								  </span>
									</div>
								</th>
								<th className="px-6 py-5 xl:w-[165px] xl:px-0">
									<div className="flex w-full items-center space-x-2.5">
								  <span className="text-base font-medium text-bgray-600"
								  >Engagement</span
								  >
										<span>
									<svg
										width="14"
										height="15"
										viewBox="0 0 14 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
									  <path
										  d="M10.332 1.31567V13.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M3.66602 13.3157V1.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									</svg>
								  </span>
									</div>
								</th>
								<th className="px-6 py-5 xl:w-[165px] xl:px-0">
									<div className="flex w-full items-center space-x-2.5">
								  <span className="text-base font-medium text-bgray-600"
								  >ER</span
								  >
										<span>
									<svg
										width="14"
										height="15"
										viewBox="0 0 14 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
									  <path
										  d="M10.332 1.31567V13.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M3.66602 13.3157V1.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									  <path
										  d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
										  stroke="#718096"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
									</svg>
								  </span>
									</div>
								</th>
								<th className="py-5"></th>
							</tr>
							</thead>


							<tbody className={`${loading ? 'bg-gray-200 animate-pulse' : ''} h-[500px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700`}>
							{

								loading
									?
									<div className={`flex items-center justify-center h-full w-full`}>
										<OurLoading/>
									</div>
									:
								posts && posts?.length > 0
									?
									posts.filter((v) => v.platform === platform).map((v, key) => {
										const isBelowAverage = v?.likes < averageLikes;

										return (
											<tr
												key={key}
												className="border-b border-bgray-300 dark:border-darkblack-400"
											>
												<td className="px-6 py-5 xl:px-0">
													<div className="flex w-full items-center space-x-2.5">
														<div className="h-10 w-10 overflow-hidden rounded-full">
															<img
																src="./assets/images/avatar/ha-1.png"
																alt="avatar"
																className="h-full w-full object-cover"
															/>
														</div>
														<p className="text-base font-semibold text-bgray-900 dark:text-white">
															{v?.username}
														</p>
													</div>
												</td>
												<td className="px-6 py-5 xl:px-0">
													<p className="text-base font-medium text-bgray-900 dark:text-white text-sm">
														{v?.caption}
														<br/>
														<span
															onClick={() => {
																if (platform === 'Instagram') {
																	redirect(`https://www.instagram.com/p/${v?.post_code}`)
																}
																if (platform === 'TikTok') {
																	redirect(`https://www.tiktok.com/@${v?.username}/video/${v?.unique_id_post}`)
																}
															}}
															className="font-bold cursor-pointer text-md"
														>
            Original Post
          </span>
													</p>
												</td>
												<td className="px-6 py-5 xl:px-0">
													<p className="text-base font-medium text-bgray-900 dark:text-white">
														{moment(v?.created_at).format("DDD MMM YYYY")}
													</p>
												</td>
												<td className="px-6 py-5 xl:w-[165px] xl:px-0 text-end">
													<div className="flex w-full items-center">
														<p className="text-base font-medium text-bgray-900 dark:text-white">
															{v?.likes}
														</p>
													</div>
												</td>
												<td className="py-5">
													<div className="flex justify-center">
														<button type="button">
															<div className={`w-6 h-6 rounded-full ${isBelowAverage ? 'bg-red-500' : 'bg-green-500'}`}></div>
														</button>
													</div>
												</td>
											</tr>
										);
									})

									:
									<div className={`flex items-center justify-center h-[300px] align-center w-full`}>
										<OurEmptyData width={100}/>
									</div>
							}
							</tbody>
						</table>
					</div>
					<div className="pagination-content w-full">
						<div
							className="flex w-full items-center justify-center lg:justify-between"
						>
							<div className="hidden items-center space-x-4 lg:flex">
                          <span
							  className="text-sm font-semibold text-bgray-600 dark:text-bgray-50"
						  >Show result:</span
						  >
								<div className="relative">
									<button
										// onClick="dateFilterAction('#result-filter')"
										type="button"
										className="flex items-center space-x-6 rounded-lg border border-bgray-300 px-2.5 py-[14px] dark:border-darkblack-400"
									>
                              <span
								  className="text-sm font-semibold text-bgray-900 dark:text-bgray-50"
							  >3</span
							  >
										<span>
                                <svg
									width="17"
									height="17"
									viewBox="0 0 17 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
                                  <path
									  d="M4.03516 6.03271L8.03516 10.0327L12.0352 6.03271"
									  stroke="#A0AEC0"
									  strokeWidth="1.5"
									  strokeLinecap="round"
									  strokeLinejoin="round"
								  />
                                </svg>
                              </span>
									</button>
									<div
										id="result-filter"
										className="absolute right-0 top-14 z-10 hidden w-full overflow-hidden rounded-lg bg-white shadow-lg"
									>
										<ul>
											<li
												// onClick="dateFilterAction('#result-filter')"
												className="text-bgray-90 cursor-pointer px-5 py-2 text-sm font-medium hover:bg-bgray-100"
											>
												1
											</li>
											<li
												// onClick="dateFilterAction('#result-filter')"
												className="cursor-pointer px-5 py-2 text-sm font-medium text-bgray-900 hover:bg-bgray-100"
											>
												2
											</li>

											<li
												// onClick="dateFilterAction('#result-filter')"
												className="cursor-pointer px-5 py-2 text-sm font-medium text-bgray-900 hover:bg-bgray-100"
											>
												3
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div
								className="flex items-center space-x-5 sm:space-x-[35px]"
							>
								<button type="button">
                            <span>
                              <svg
								  width="21"
								  height="21"
								  viewBox="0 0 21 21"
								  fill="none"
								  xmlns="http://www.w3.org/2000/svg"
							  >
                                <path
									d="M12.7217 5.03271L7.72168 10.0327L12.7217 15.0327"
									stroke="#A0AEC0"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
                              </svg>
                            </span>
								</button>
								<div className="flex items-center">
									<button
										type="button"
										className="rounded-lg bg-success-50 px-4 py-1.5 text-xs font-bold text-success-300 dark:bg-darkblack-500 dark:text-bgray-50 lg:px-6 lg:py-2.5 lg:text-sm"
									>
										1
									</button>
									<button
										type="button"
										className="rounded-lg px-4 py-1.5 text-xs font-bold text-bgray-500 transition duration-300 ease-in-out hover:bg-success-50 hover:text-success-300 dark:hover:bg-darkblack-500 lg:px-6 lg:py-2.5 lg:text-sm"
									>
										2
									</button>

									<span className="text-sm text-bgray-500">. . . .</span>
									<button
										type="button"
										className="rounded-lg px-4 py-1.5 text-xs font-bold text-bgray-500 transition duration-300 ease-in-out hover:bg-success-50 hover:text-success-300 dark:hover:bg-darkblack-500 lg:px-6 lg:py-2.5 lg:text-sm"
									>
										20
									</button>
								</div>
								<button type="button">
                            <span>
                              <svg
								  width="21"
								  height="21"
								  viewBox="0 0 21 21"
								  fill="none"
								  xmlns="http://www.w3.org/2000/svg"
							  >
                                <path
									d="M7.72168 5.03271L12.7217 10.0327L7.72168 15.0327"
									stroke="#A0AEC0"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
                              </svg>
                            </span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PostsTable;
