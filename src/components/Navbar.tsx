'use client';

import {useState} from "react";

const Navbar = () => {
	const [isProfileVisible, setProfileVisible] = useState(false);

	const profileAction = () => {
		setProfileVisible((prev) => !prev);
	};

	return (
		<>
			<header className="header-wrapper fixed z-30 hidden w-full md:block">
				<div
					className="relative flex h-[108px] w-full items-center justify-between bg-white px-10 dark:bg-darkblack-600 2xl:px-[76px]"
				>
					<button
						title="Ctrl+b"
						type="button"
						className="drawer-btn absolute left-0 top-auto rotate-180 transform"
					>
                <span>
                  <svg
					  width="16"
					  height="40"
					  viewBox="0 0 16 40"
					  fill="none"
					  xmlns="http://www.w3.org/2000/svg"
				  >
                    <path
						d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z"
						fill="#22C55E"
					/>
                    <path
						d="M10 15L6 20.0049L10 25.0098"
						stroke="#ffffff"
						strokeWidth="1.2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
                  </svg>
                </span>
					</button>
					<div>
						<h3
							className="text-xl font-bold text-bgray-900 dark:text-bgray-50 lg:text-3xl lg:leading-[36.4px]"
						>
							Dashboard
						</h3>
						<p
							className="text-xs font-medium text-bgray-600 dark:text-bgray-50 lg:text-sm lg:leading-[25.2px]"
						>
							Let’s check your update today
						</p>
					</div>
					{/*		<div className="searchbar-wrapper">*/}
					{/*			<div*/}
					{/*				className="px flex h-[56px] w-[300px] items-center justify-between rounded-lg border border-transparent bg-bgray-50 px-4 focus-within:border-success-300 dark:bg-darkblack-500 lg:w-[400px]"*/}
					{/*			>*/}
					{/*				<div className="flex w-full items-center space-x-3.5">*/}
					{/*<span>*/}
					{/*  <svg*/}
					{/*	  className="stroke-bgray-900 dark:stroke-bgray-50"*/}
					{/*	  width="20"*/}
					{/*	  height="20"*/}
					{/*	  viewBox="0 0 20 20"*/}
					{/*	  fill="none"*/}
					{/*	  xmlns="http://www.w3.org/2000/svg"*/}
					{/*  >*/}
					{/*    <circle*/}
					{/*		cx="9.78639"*/}
					{/*		cy="9.78602"*/}
					{/*		r="8.23951"*/}
					{/*		strokeWidth="1.5"*/}
					{/*		strokeLinecap="round"*/}
					{/*		strokeLinejoin="round"*/}
					{/*	/>*/}
					{/*    <path*/}
					{/*		d="M15.5176 15.9447L18.7479 19.1667"*/}
					{/*		strokeWidth="1.5"*/}
					{/*		strokeLinecap="round"*/}
					{/*		strokeLinejoin="round"*/}
					{/*	/>*/}
					{/*  </svg>*/}
					{/*</span>*/}
					{/*					<label htmlFor="search" className="w-full">*/}
					{/*						<input*/}
					{/*							type="text"*/}
					{/*							id="search"*/}
					{/*							placeholder="Search..."*/}
					{/*							className="search-input w-full border-none bg-bgray-50 bg-none px-0 text-sm tracking-wide text-bgray-600 placeholder:text-sm placeholder:font-semibold focus:outline-none focus:ring-0 dark:bg-darkblack-500 dark:placeholder:text-bgray-500"*/}
					{/*						/>*/}
					{/*					</label>*/}
					{/*				</div>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					<div className="quick-access-wrapper relative">
						<div className="flex items-center space-x-[43px]">
							<div className="items-center space-x-5 xl:flex">
								<button
									type="button"
									id="theme-toggle"
									className="relative flex h-[52px] w-[52px] items-center justify-center rounded-[12px] border border-success-300 dark:border-darkblack-400"
								>
                      <span className="block dark:hidden">
                        <svg
							className="stroke-bgray-900"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
                          <path
							  d="M18.3284 14.8687C13.249 14.8687 9.13135 10.751 9.13135 5.67163C9.13135 4.74246 9.26914 3.84548 9.5254 3C5.74897 4.14461 3 7.65276 3 11.803C3 16.8824 7.11765 21 12.197 21C16.3472 21 19.8554 18.251 21 14.4746C20.1545 14.7309 19.2575 14.8687 18.3284 14.8687Z"
							  strokeWidth="1.5"
							  strokeLinejoin="round"
						  />
                        </svg>
                      </span>
									<span className="hidden dark:block">
                        <svg
							className="stroke-bgray-900 dark:stroke-bgray-50"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
                          <circle cx="12" cy="12" r="5" strokeWidth="1.5"/>
                          <path
							  d="M12 2V4"
							  strokeWidth="1.5"
							  strokeLinecap="round"
						  />
                          <path
							  d="M12 20V22"
							  strokeWidth="1.5"
							  strokeLinecap="round"
						  />
                          <path
							  d="M20.6602 7L18.9281 8"
							  strokeWidth="1.5"
							  strokeLinecap="round"
						  />
                          <path
							  d="M5.07178 16L3.33973 17"
							  strokeWidth="1.5"
							  strokeLinecap="round"
						  />
                          <path
							  d="M3.33984 7L5.07189 8"
							  strokeWidth="1.5"
							  strokeLinecap="round"
						  />
                          <path
							  d="M18.9282 16L20.6603 17"
							  strokeWidth="1.5"
							  strokeLinecap="round"
						  />
                        </svg>
                      </span>
								</button>
							</div>
							<div
								className="hidden h-[48px] w-[1px] bg-bgray-300 dark:bg-darkblack-400 xl:block"
							></div>
							<div
								onClick={profileAction}
								className="flex cursor-pointer space-x-0 lg:space-x-3 gap-3"
							>
								<div
									className="h-[52px] w-[52px] overflow-hidden rounded-xl border border-bgray-300"
								>
									<img
										className="object-cover"
										src="/assets/images/avatar/profile-52x52.png"
										alt="avater"
									/>
								</div>
								<div className="hidden 2xl:block">
									<div className="flex items-center space-x-2.5">
										<h3
											className="text-base font-bold leading-[28px] text-bgray-900 dark:text-white"
										>
											John Doe
										</h3>
										<span>
                          <svg
							  className="stroke-bgray-900 dark:stroke-white"
							  width="24"
							  height="24"
							  viewBox="0 0 24 24"
							  fill="none"
							  xmlns="http://www.w3.org/2000/svg"
						  >
                            <path
								d="M7 10L12 14L17 10"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
                          </svg>
                        </span>
									</div>
									<p
										className="text-sm font-medium leading-[20px] text-bgray-600 dark:text-bgray-50"
									>
										Super Admin
									</p>
								</div>
							</div>
						</div>

						<div className="profile-wrapper">
							<div
								onClick={profileAction}
								className={`profile-outside fixed -left-[43px] top-0 ${!isProfileVisible ? 'hidden' : ''} h-full w-full`}
							></div>
							<div
								style={{filter: 'drop-shadow(12px 12px 40px rgba(0, 0, 0, 0.08))'}}
								className={`profile-box absolute right-0 top-[81px] w-[300px] ${!isProfileVisible ? 'hidden overflow-hidden' : ''} rounded-lg bg-white dark:bg-darkblack-600`}
							>
								<div className="relative w-full px-3 py-2">
									<div>
										<ul>
											<li className="w-full">
												<a href="settings.html">
													<div
														className="flex items-center space-x-[18px] rounded-lg p-[14px] text-bgray-600 hover:bg-bgray-100 hover:text-bgray-900 hover:dark:bg-darkblack-500"
													>
														<div className="w-[20px]">
                                  <span>
                                    <svg
										className="stroke-bgray-900 dark:stroke-bgray-50"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
                                      <path
										  d="M12.1197 12.7805C12.0497 12.7705 11.9597 12.7705 11.8797 12.7805C10.1197 12.7205 8.71973 11.2805 8.71973 9.51047C8.71973 7.70047 10.1797 6.23047 11.9997 6.23047C13.8097 6.23047 15.2797 7.70047 15.2797 9.51047C15.2697 11.2805 13.8797 12.7205 12.1197 12.7805Z"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
                                      <path
										  d="M18.7398 19.3796C16.9598 21.0096 14.5998 21.9996 11.9998 21.9996C9.39977 21.9996 7.03977 21.0096 5.25977 19.3796C5.35977 18.4396 5.95977 17.5196 7.02977 16.7996C9.76977 14.9796 14.2498 14.9796 16.9698 16.7996C18.0398 17.5196 18.6398 18.4396 18.7398 19.3796Z"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
                                      <path
										  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
                                    </svg>
                                  </span>
														</div>
														<div className="flex-1">
                                  <span
									  className="text-sm font-semibold text-bgray-900 dark:text-white"
								  >My Profile</span
								  >
														</div>
													</div>
												</a>
											</li>
											<li className="w-full">
												<a href="#">
													<div
														className="flex items-center space-x-[18px] rounded-lg p-[14px] text-success-300"
													>
														<div className="w-[20px]">
                                  <span>
                                    <svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
                                      <path
										  d="M15 10L13.7071 11.2929C13.3166 11.6834 13.3166 12.3166 13.7071 12.7071L15 14M14 12L22 12M6 20C3.79086 20 2 18.2091 2 16V8C2 5.79086 3.79086 4 6 4M6 20C8.20914 20 10 18.2091 10 16V8C10 5.79086 8.20914 4 6 4M6 20H14C16.2091 20 18 18.2091 18 16M6 4H14C16.2091 4 18 5.79086 18 8"
										  stroke="#22C55E"
										  strokeWidth="1.5"
										  strokeLinecap="round"
									  />
                                    </svg>
                                  </span>
														</div>
														<div className="flex-1">
                                  <span className="text-sm font-semibold"
								  >Log Out</span
								  >
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
									<div className="my-[14px] h-[1px] w-full bg-bgray-300"></div>
									<div>
										<ul>
											<li className="w-full">
												<a href="settings.html">
													<div
														className="rounded-lg p-[14px] text-bgray-600 hover:bg-bgray-100 hover:text-bgray-900 dark:text-bgray-50 dark:hover:bg-darkblack-500"
													>
                                <span className="text-sm font-semibold"
								>Settings</span
								>
													</div>
												</a>
											</li>
											<li className="w-full">
												<a href="users.html">
													<div
														className="rounded-lg p-[14px] text-bgray-600 hover:bg-bgray-100 hover:text-bgray-900 dark:text-bgray-50 dark:hover:bg-darkblack-500"
													>
														<span className="text-sm font-semibold">Users</span>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<header className="mobile-wrapper fixed z-20 block w-full md:hidden">
				<div
					className="flex h-[80px] w-full items-center justify-between bg-white dark:bg-darkblack-600"
				>
					<div className="flex h-full w-full items-center space-x-5">
						<button type="button" className="drawer-btn rotate-180 transform">
                  <span>
                    <svg
						width="16"
						height="40"
						viewBox="0 0 16 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
                      <path
						  d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z"
						  fill="#F7F7F7"
					  />
                      <path
						  d="M10 15L6 20.0049L10 25.0098"
						  stroke="#A0AEC0"
						  strokeWidth="1.2"
						  strokeLinecap="round"
						  strokeLinejoin="round"
					  />
                    </svg>
                  </span>
						</button>
						<div>
							<a href="/">
								<img
									src="/assets/images/logo/logo-color.svg"
									className="block dark:hidden"
									alt="logo"
								/>
								<img
									src="/assets/images/logo/logo-white.svg"
									className="hidden dark:block"
									alt="logo"
								/>
							</a>
						</div>
					</div>
					<div className="mr-2">
						<div
							onClick={profileAction}
							className="flex cursor-pointer space-x-0 lg:space-x-3"
						>
							<div
								className="h-[52px] w-[52px] overflow-hidden rounded-xl border border-bgray-300"
							>
								<img
									className="object-cover"
									src="/assets/images/avatar/profile-52x52.png"
									alt="avater"
								/>
							</div>
							<div className="hidden 2xl:block">
								<div className="flex items-center space-x-2.5">
									<h3
										className="text-base font-bold leading-[28px] text-bgray-900"
									>
										John Doe
									</h3>
									<span>
                        <svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
                          <path
							  d="M7 10L12 14L17 10"
							  stroke="#28303F"
							  strokeWidth="2"
							  strokeLinecap="round"
							  strokeLinejoin="round"
						  />
                        </svg>
                      </span>
								</div>
								<p
									className="text-sm font-medium leading-[20px] text-bgray-600"
								>
									Super Admin
								</p>
							</div>
						</div>

						<div className="profile-wrapper">
							<div
								onClick={profileAction}
								className={`profile-outside fixed -left-[43px] top-0 ${!isProfileVisible ? 'hidden' : ''} h-full w-full`}
							></div>
							<div
								style={{filter: 'drop-shadow(12px 12px 40px rgba(0, 0, 0, 0.08))'}}
								className={`profile-box absolute right-0 top-[81px] w-[300px] ${!isProfileVisible ? 'hidden overflow-hidden' : ''} rounded-lg bg-white`}
							>
								<div className="relative w-full px-3 py-2">
									<div>
										<ul>
											<li className="w-full">
												<a href="settings.html">
													<div
														className="flex items-center space-x-[18px] rounded-lg p-[14px] text-bgray-600 hover:bg-bgray-100 hover:text-bgray-900"
													>
														<div className="w-[20px]">
                                  <span>
                                    <svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
                                      <path
										  d="M12.1197 12.7805C12.0497 12.7705 11.9597 12.7705 11.8797 12.7805C10.1197 12.7205 8.71973 11.2805 8.71973 9.51047C8.71973 7.70047 10.1797 6.23047 11.9997 6.23047C13.8097 6.23047 15.2797 7.70047 15.2797 9.51047C15.2697 11.2805 13.8797 12.7205 12.1197 12.7805Z"
										  stroke="#111827"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
                                      <path
										  d="M18.7398 19.3796C16.9598 21.0096 14.5998 21.9996 11.9998 21.9996C9.39977 21.9996 7.03977 21.0096 5.25977 19.3796C5.35977 18.4396 5.95977 17.5196 7.02977 16.7996C9.76977 14.9796 14.2498 14.9796 16.9698 16.7996C18.0398 17.5196 18.6398 18.4396 18.7398 19.3796Z"
										  stroke="#111827"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
                                      <path
										  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
										  stroke="#111827"
										  strokeWidth="1.5"
										  strokeLinecap="round"
										  strokeLinejoin="round"
									  />
                                    </svg>
                                  </span>
														</div>
														<div className="flex-1">
                                  <span className="text-sm font-semibold"
								  >My Profile</span
								  >
														</div>
													</div>
												</a>
											</li>
											<li className="w-full">
												<a href="messages.html">
													<div
														className="flex items-center space-x-[18px] rounded-lg p-[14px] text-bgray-600 hover:bg-bgray-100 hover:text-bgray-900"
													>
														<div className="w-[20px]">
                                  <span>
                                    <svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
                                      <path
										  d="M2 12V7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H8M6 8L9.7812 10.5208C11.1248 11.4165 12.8752 11.4165 14.2188 10.5208L18 8M2 15H8M2 18H8"
										  stroke="#2A313C"
										  strokeWidth="1.5"
										  strokeLinecap="round"
									  />
                                    </svg>
                                  </span>
														</div>
														<div className="flex-1">
                                  <span className="text-sm font-semibold"
								  >Inbox</span
								  >
														</div>
													</div>
												</a>
											</li>
											<li className="w-full">
												<a href="#">
													<div
														className="flex items-center space-x-[18px] rounded-lg p-[14px] text-success-300"
													>
														<div className="w-[20px]">
                                  <span>
                                    <svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
                                      <path
										  d="M15 10L13.7071 11.2929C13.3166 11.6834 13.3166 12.3166 13.7071 12.7071L15 14M14 12L22 12M6 20C3.79086 20 2 18.2091 2 16V8C2 5.79086 3.79086 4 6 4M6 20C8.20914 20 10 18.2091 10 16V8C10 5.79086 8.20914 4 6 4M6 20H14C16.2091 20 18 18.2091 18 16M6 4H14C16.2091 4 18 5.79086 18 8"
										  stroke="#22C55E"
										  strokeWidth="1.5"
										  strokeLinecap="round"
									  />
                                    </svg>
                                  </span>
														</div>
														<div className="flex-1">
                                  <span className="text-sm font-semibold"
								  >Log Out</span
								  >
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
									<div className="my-[14px] h-[1px] w-full bg-bgray-300"></div>
									<div>
										<ul>
											<li className="w-full">
												<a href="settings.html">
													<div
														className="rounded-lg p-[14px] text-bgray-600 hover:bg-bgray-100 hover:text-bgray-900"
													>
                                <span className="text-sm font-semibold"
								>Settings</span
								>
													</div>
												</a>
											</li>
											<li className="w-full">
												<a href="users.html">
													<div
														className="rounded-lg p-[14px] text-bgray-600 hover:bg-bgray-100 hover:text-bgray-900"
													>
														<span className="text-sm font-semibold">Users</span>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Navbar;
