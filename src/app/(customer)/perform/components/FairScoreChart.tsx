'use client'

import {useEffect, useRef, useState} from "react";
import Chart from "chart.js/auto";
import moment from "moment";
import OurDatePicker from "@/components/OurDatePicker";
import OurSelect from "@/components/OurSelect";

const FairScoreChart = () => {
	const chartRef = useRef<HTMLCanvasElement | null>(null);
	// let chartRef: HTMLCanvasElement | null = null
	const [isDateFilterVisible, setDateFilterVisible] = useState(false);

	const dateFilterAction = () => {
		setDateFilterVisible(!isDateFilterVisible);
	};

	useEffect(() => {
		if (chartRef) {
			const revenueFlowElement = chartRef.current?.getContext("2d");

			if (revenueFlowElement) {
				const month = [
					"Jan", "Feb", "Mar", "April", "May", "Jun",
					"July", "Aug", "Sep", "Oct", "Nov", "Dec"
				];

				const revenueFlow = new Chart(revenueFlowElement, {
					type: "line",
					plugins: [
						{
							id: "overAllBalance",
							beforeDatasetsDraw(chart) {
								chart.ctx.shadowColor = "rgba(37, 99, 235, 0.14)";
								chart.ctx.shadowBlur = 8;
							},
							afterDatasetsDraw(chart) {
								chart.ctx.shadowColor = "rgba(0, 0, 0, 0)";
								chart.ctx.shadowBlur = 0;
							},
						},
					],
					data: {
						labels: month,
						datasets: [
							{
								label: "bapenda.sby",
								data: [65, 75, 65, 55, 75, 55, 45, 65, 75, 65, 85, 75],
								backgroundColor: () => {
									const gradient = revenueFlowElement.createLinearGradient(0, 0, 0, 450);
									gradient.addColorStop(0, "rgba(34, 197, 94, 0.41)");
									gradient.addColorStop(0.6, "rgba(255, 255, 255, 0)");
									return gradient;
								},
								borderColor: "#22C55E",
								pointBorderColor: "#ffffff",
								pointBackgroundColor: "#22C55E",
								pointBorderWidth: 4,
								borderWidth: 2,
								fill: true,
								tension: 0.4,
							},
							{
								label: "opdsurabaya",
								data: [45, 15, 37, 85, 71, 43, 47, 89, 12, 89, 24, 45],
								backgroundColor: () => {
									const gradient = revenueFlowElement.createLinearGradient(0, 0, 0, 450);
									gradient.addColorStop(0, "rgba(34, 197, 94, 0.41)");
									gradient.addColorStop(0.6, "rgba(255, 255, 255, 0)");
									return gradient;
								},
								borderColor: "rgb(255, 120, 75)",
								pointBorderColor: "#ffffff",
								pointBackgroundColor: "rgb(255, 120, 75)",
								pointBorderWidth: 4,
								borderWidth: 2,
								fill: true,
								tension: 0.4,
							},
						],
					},
					options: {
						interaction: {
							mode: "index",
							axis: "x",
							intersect: false,
						},
						maintainAspectRatio: false,
						responsive: true,
						scales: {
							x: {
								// grid: {color: "rgb(243 ,246, 255 ,1)"},
							},
							y: {
								beginAtZero: true,
								// grid: {
								// 	color: "rgb(243 ,246, 255 ,1)",
								// 	borderDash: [5, 5],
								// 	borderDashOffset: 2,
								// },
								ticks: {
									callback(value) {
										return `${value}K `;
									},
								},
							},
						},
						plugins: {
							legend: {position: "top", display: false},
						},
						elements: {
							point: {
								radius: 0,
								hoverRadius: 4,
							},
						},
					},
				});

				return () => {
					revenueFlow.destroy();
				};
			}
		}
	}, []);

	return (
		<div
			className="flex w-full flex-col justify-between rounded-lg bg-white p-1 dark:bg-darkblack-600 lg:px-8 lg:py-7"
		>
			<div className="mb-2 flex items-center justify-between pb-2">
				<div>
				  <span
					  className="text-sm font-medium text-bgray-600 dark:text-white"
				  >FAIR Score</span
				  >
					<div className="flex items-center space-x-2">
						<h3
							className="text-xl font-bold leading-[36px] text-bgray-900 dark:text-white sm:text-2xl"
						>
							{moment().format("DD MMM YYYY")}
						</h3>
						{/*<span className="text-sm font-medium text-success-300">+20%</span>*/}
					</div>
				</div>
				<div className="hidden items-center space-x-[28px] sm:flex">
					<div className="flex items-center space-x-2">
						<span
							className="text-sm font-medium text-bgray-700 dark:text-white"
						>bapenda.sby
					</span>
					</div>
					<div className="flex items-center space-x-2">
						<span
							className="text-sm font-medium text-bgray-700 dark:text-white"
						>opdsurabaya
					</span>
					</div>
				</div>
				<div className="date-filter relative flex flex-row gap-5">
					<OurDatePicker/>
					<OurSelect options={null} disabled={false}/>
				</div>
			</div>
			<div className="w-full">
				<canvas id="overAllBalance" ref={chartRef} height="280"></canvas>
			</div>
		</div>
	)
}

export default FairScoreChart;
