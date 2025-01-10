'use client';
const Sidebar = () => {
	return (
		<>
			<aside
				className="sidebar-wrapper fixed top-0 z-30 block h-full w-[308px] bg-white dark:bg-darkblack-600 sm:hidden xl:block shadow-[4px_0_8px_rgba(0,0,0,0.1)]"
			>
				<div
					className="sidebar-header relative z-30 flex h-[108px] w-full items-center border-b border-r border-b-[#F7F7F7] border-r-[#F7F7F7] pl-[50px] dark:border-darkblack-400"
				>
					<a href="index.html">
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
					<button
						type="button"
						className="drawer-btn absolute right-0 top-auto"
						title="Ctrl+b"
					>
							<span>
                                <svg width="16"
									 height="40"
									 viewBox="0 0 16 40"
									 fill="#22C55E"
									 xmlns="http://www.w3.org/2000/svg"
								>
                                  <path
									  d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z"
									  fill="#22C5E"
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
				</div>
				<div
					className="sidebar-body overflow-style-none relative z-30 h-screen w-full overflow-y-scroll pb-[200px] pl-[48px] pt-[14px]"
				>
					<div className="nav-wrapper mb-[36px] pr-[50px]">
						<div className="item-wrapper mb-5">
							<h4
								className="border-b border-bgray-200 text-sm font-medium leading-7 text-bgray-700 dark:border-darkblack-400 dark:text-bgray-50"
							>
								Menu
							</h4>
							<ul className="mt-2.5">
								<li className="item py-[11px] text-bgray-900 dark:text-white">
									<a href="index.html">
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-2.5">
                          <span className="item-ico">
                            <svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
                              <path
								  d="M18 11C18 15.9706 13.9706 20 9 20C4.02944 20 0 15.9706 0 11C0 6.02944 4.02944 2 9 2C13.9706 2 18 6.02944 18 11Z"
								  fill="#1A202C"
								  className="path-1"
							  />
                              <path
								  d="M19.8025 8.01277C19.0104 4.08419 15.9158 0.989557 11.9872 0.197453C10.9045 -0.0208635 10 0.89543 10 2V8C10 9.10457 10.8954 10 12 10H18C19.1046 10 20.0209 9.09555 19.8025 8.01277Z"
								  fill="#22C55E"
								  className="path-2"
							  />
                            </svg>
                          </span>
												<span
													className="item-text text-lg font-medium leading-none"
												>Lysa AI</span
												>
											</div>
											<span>
                          <svg
							  width="6"
							  height="12"
							  viewBox="0 0 6 12"
							  fill="none"
							  className="fill-current"
							  xmlns="http://www.w3.org/2000/svg"
						  >
							  <path
								  fillRule="evenodd"
								  clipRule="evenodd"
								  fill="currentColor"
								  d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
							  />
                          </svg>
                        </span>
										</div>
									</a>
									<ul
										className="sub-menu ml-2.5 mt-[22px] border-l border-success-100 pl-5"
									>
										<li>
											<a
												href="/maintenance"
												className="text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300"
											>Media Monitoring</a
											>
										</li>
										<li>
											<a
												href="/maintenance"
												className="text-md inline-block py-1.5 font-medium text-bgray-600 transition-all hover:text-bgray-800 dark:text-bgray-50 hover:dark:text-success-300"
											>Netizen Monitoring</a
											>
										</li>
									</ul>
								</li>
							</ul>

							<ul className="mt-2.5">
								<li className="item py-[11px] text-bgray-900 dark:text-white">
									<a href="/perform">
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-2.5">
                         <span className="item-ico">
                            <svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
                              <path
								  d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z"
								  fill="#1A202C"
								  className="path-1"
							  />
                              <path
								  d="M14 9C12.8954 9 12 9.89543 12 11L12 13C12 14.1046 12.8954 15 14 15C15.1046 15 16 14.1046 16 13V11C16 9.89543 15.1046 9 14 9Z"
								  fill="#22C55E"
								  className="path-2"
							  />
                              <path
								  d="M6 5C4.89543 5 4 5.89543 4 7L4 13C4 14.1046 4.89543 15 6 15C7.10457 15 8 14.1046 8 13L8 7C8 5.89543 7.10457 5 6 5Z"
								  fill="#22C55E"
								  className="path-2"
							  />
                            </svg>
                          </span>
												<span
													className="item-text text-lg font-medium leading-none"
												>Perform</span
												>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</aside>
			<div
				style={{zIndex: 25}}
				className="aside-overlay fixed left-0 top-0 block h-full w-full bg-black bg-opacity-30 sm:hidden"
			></div>
			<aside className="relative hidden w-[96px] bg-white dark:bg-black sm:block">
				<div className="sidebar-wrapper-collapse relative top-0 z-30 w-full">
					<div
						className="sidebar-header sticky top-0 z-20 flex h-[108px] w-full items-center justify-center border-b border-r border-b-[#F7F7F7] border-r-[#F7F7F7] bg-white dark:border-darkblack-500 dark:bg-darkblack-600"
					>
						<a href="index.html">
							<img
								src="/assets/images/logo/logo-short.svg"
								className="block dark:hidden"
								alt="logo"
							/>
							<img
								src="/assets/images/logo/logo-short-white.svg"
								className="hidden dark:block"
								alt="logo"
							/>
						</a>
					</div>
					<div className="sidebar-body w-full pt-[14px]">
						<div className="flex flex-col items-center">
							<div className="nav-wrapper mb-[36px]">
								<div className="item-wrapper mb-5">
									<ul
										className="mt-2.5 flex flex-col items-center justify-center"
									>
										<li className="item px-[43px] py-[11px]">
											<a href="statistics.html">
                          <span className="item-ico">
                            <svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
                              <path
								  d="M18 11C18 15.9706 13.9706 20 9 20C4.02944 20 0 15.9706 0 11C0 6.02944 4.02944 2 9 2C13.9706 2 18 6.02944 18 11Z"
								  fill="#1A202C"
								  className="path-1"
							  />
                              <path
								  d="M19.8025 8.01277C19.0104 4.08419 15.9158 0.989557 11.9872 0.197453C10.9045 -0.0208635 10 0.89543 10 2V8C10 9.10457 10.8954 10 12 10H18C19.1046 10 20.0209 9.09555 19.8025 8.01277Z"
								  fill="#22C55E"
								  className="path-2"
							  />
                            </svg>
                          </span>
											</a>
											<ul
												className="sub-menu min-w-[200px] rounded-lg border-l border-success-100 bg-white px-5 py-2 shadow-lg"
											>
											</ul>
										</li>
										<li className="item px-[43px] py-[11px]">
											<a href="analytics.html">
                          <span className="item-ico">
                            <svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
                              <path
								  d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z"
								  fill="#1A202C"
								  className="path-1"
							  />
                              <path
								  d="M14 9C12.8954 9 12 9.89543 12 11L12 13C12 14.1046 12.8954 15 14 15C15.1046 15 16 14.1046 16 13V11C16 9.89543 15.1046 9 14 9Z"
								  fill="#22C55E"
								  className="path-2"
							  />
                              <path
								  d="M6 5C4.89543 5 4 5.89543 4 7L4 13C4 14.1046 4.89543 15 6 15C7.10457 15 8 14.1046 8 13L8 7C8 5.89543 7.10457 5 6 5Z"
								  fill="#22C55E"
								  className="path-2"
							  />
                            </svg>
                          </span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</>
	)
}

export default Sidebar;
