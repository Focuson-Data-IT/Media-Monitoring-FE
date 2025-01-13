'use client'

import React, {useEffect, useRef, useState} from "react";
import Chart from "chart.js/auto";
import moment from "moment";
import OurDatePicker from "@/components/OurDatePicker";
import OurSelect from "@/components/OurSelect";


const FairScoreChart: React.FC<{ setParentPeriod: void }> = ({setParentPeriod = null}) => {
	const chartRef = useRef<HTMLCanvasElement | null>(null);


	const [loading, setLoading] = useState<boolean>(true);
	const [datasets, setDatasets] = useState<any>(null);

	const [fairScoreChart, setFairScoreChart] = useState<Chart | null>(null);

	const [period, setPeriod] = useState<Date | string | null>(null)

	const getFairScoreChartData = async () => {
		setLoading(true)
		// const response = await request.get('')
		// setDatasets(buildDatasets(response.data.data))
		setDatasets([
			{
				label: "bapenda.sby",
				data: [65, 75, 65, 55, 75, 55, 45, 65, 75, 65, 85, 75, 65, 75, 65, 55, 75, 55, 45, 65, 75, 65, 85, 75, 65, 75, 65, 55, 75, 55],
				backgroundColor: () => {
					const gradient = chartRef.current?.getContext("2d").createLinearGradient(0, 0, 0, 450);
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
				data: [45, 15, 37, 85, 71, 43, 47, 89, 12, 89, 24, 45, 45, 15, 37, 85, 71, 43, 47, 89, 12, 89, 24, 45, 45, 15, 37, 85, 71, 43],
				backgroundColor: () => {
					const gradient = chartRef.current?.getContext("2d").createLinearGradient(0, 0, 0, 450);
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
		])
	}
	const drawChart = (datasets) => {
		if (chartRef && chartRef.current) {
			const ctx = chartRef.current?.getContext("2d");

			if (fairScoreChart) {
				fairScoreChart.destroy();
			}

			const month = [
				"1", "2", "3", "4", "5", "6",
				"7", "8", "9", "10", "11", "12",
				"13", "14", "15", "16", "17", "18",
				"19", "20", "21", "22", "23", "24",
				"25", "26", "27", "28", "29", "30",
			];

			const newChart = new Chart(ctx, {
				type: "line",
				plugins: [
					{
						id: "fairScoreCanvas",
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
					datasets: datasets,
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
						y: {
							beginAtZero: true,
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

			setFairScoreChart(newChart);
		}
	};


	useEffect(() => {
		getFairScoreChartData().then((v) => {
			setLoading(false);
		})
	}, []);

	useEffect(() => {
		if (datasets) {
			drawChart(datasets);
		}

		return () => {
			if (fairScoreChart) {
				fairScoreChart.destroy();
				setFairScoreChart(null);
			}
		};
	}, [datasets]);


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
					<OurDatePicker applyCallback={(v) => {
						setPeriod(v)
						setParentPeriod({
							startDate: v[0],
							endDate: v[1]
						})
					}}/>
					<OurSelect options={null} disabled={false}/>
				</div>
			</div>
			<div className="w-full">
				<canvas id="fairScoreCanvas" ref={chartRef} height="280"></canvas>
			</div>
		</div>
	)
}

export default FairScoreChart;
