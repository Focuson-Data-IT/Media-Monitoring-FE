'use client';

import React, {useState} from "react";
import {TFairDetailBar} from "@/app/(customer)/perform/constants";

const FairDetailBar: React.FC<TFairDetailBar> = ({data, label, unit}) => {
	const [percentage, setPercentage] = useState(60)

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
				<div className="flex flex-col">
					<div className="flex items-center mb-2">
						<div className="flex-1">
							<div className="mb-2 flex justify-between">
                              <span
								  className="text-sm font-medium text-bgray-900 dark:text-white"
							  >surabaya</span
							  >
								<span className="text-sm font-medium dark:text-white"
								>65{unit}</span
								>
							</div>
							<div
								className="relative h-[14px] w-full overflow-hidden rounded bg-bgray-100"
							>
								<div
									style={{width: '65%'}}
									className="absolute left-0 top-0 h-full rounded bg-success-300"
								></div>
							</div>
						</div>
					</div>
					<div className="flex items-center mb-2">
						<div className="flex-1">
							<div className="mb-2 flex justify-between">
                              <span
								  className="text-sm font-medium text-bgray-900 dark:text-white"
							  >surabaya</span
							  >
								<span className="text-sm font-medium dark:text-white"
								>65{unit}</span
								>
							</div>
							<div
								className="relative h-[14px] w-full overflow-hidden rounded bg-bgray-100"
							>
								<div
									style={{width: '65%'}}
									className="absolute left-0 top-0 h-full rounded bg-success-300"
								></div>
							</div>
						</div>
					</div>
					<div className="flex items-center mb-2">
						<div className="flex-1">
							<div className="mb-2 flex justify-between">
                              <span
								  className="text-sm font-medium text-bgray-900 dark:text-white"
							  >surabaya</span
							  >
								<span className="text-sm font-medium dark:text-white"
								>65{unit}</span
								>
							</div>
							<div
								className="relative h-[14px] w-full overflow-hidden rounded bg-bgray-100"
							>
								<div
									style={{width: `${percentage}%`}}
									className={`absolute left-0 top-0 h-full rounded ${
										percentage < 30
											? 'bg-danger-300'
											: percentage < 70
												? 'bg-warning-300'
												: 'bg-success-300'
									}`}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FairDetailBar;
