"use client";

import React, {useEffect, useMemo, useRef, useState} from "react";
import Chart from "chart.js/auto";
import moment from "moment";
import request from "@/utils/request";
import {buildDatasets, buildLabels, createGradient, groupDataByUsername,} from "@/utils/chart";
import OurDatePicker from "@/components/OurDatePicker";
import OurLoading from "@/components/OurLoading";
import OurEmptyData from "@/components/OurEmptyData";
import OurSelect from "@/components/OurSelect";

const FairScoreChart: React.FC<{ setParentPeriod: any, setParentSelectedOption: any }> = ({
																							  setParentPeriod = (period: any) => null,
																							  setParentSelectedOption = (options: any) => null
																						  }) => {
	const chartRef = useRef<HTMLCanvasElement | null>(null);

	const [period, setPeriod] = useState<{
		startDate: Date | string | null;
		endDate: Date | string | null;
	}>({
		startDate: moment().toDate(),
		endDate: moment().toDate(),
	});

	const [loading, setLoading] = useState<boolean>(true);
	const [fairScoreData, setFairScoreData] = useState<any>(null);
	const [datasets, setDatasets] = useState<any>(null);

	const [fairScoreChart, setFairScoreChart] = useState<Chart | null>(null);

	const options = useMemo(() => {
		return (
			datasets?.map((v: any) => ({
				label: v.label,
				value: v.label,
			})) || []
		);
	}, [datasets]);

	// const [permaOptions, setPermaOptions] = useState([]);

	const [selectedOptions, setSelectedOptions] = useState<Array<{
		label: string;
		value: string;
	}> | null>(null);

	const [permaOptions, setPermaOptions] = useState<Array<{
		label: string;
		value: string;
	}> | null>(null);

	const getFairScoreChartData = async (payload: any) => {
		setLoading(true);
		const response = await request.get(
			`/getFairScores?customer_username=bapendabdg@focuson.com&start_date=${moment(payload?.startDate)?.format("YYYY-MM-DD")}&end_date=${moment(payload?.endDate || payload?.startDate)?.format("YYYY-MM-DD")}`,
		);
		setFairScoreData(response.data?.data);
	};

	const drawChart = (labels: any, datasets: any) => {
		if (chartRef && chartRef.current) {
			const ctx = chartRef.current?.getContext("2d");

			if (fairScoreChart) {
				fairScoreChart.destroy();
			}

			if (ctx) {
				const newChart: any = new Chart(ctx, {
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
						{
							id: "medianLine",
							afterDraw(chart) {
								const {ctx, chartArea: {top, bottom, left, right}, scales: {y}} = chart;

								const median = datasets.reduce((sum, dataset) => {
									const total = dataset.data.reduce((acc, val) => acc + val, 0);
									return sum + total / dataset.data.length;
								}, 0) / datasets.length;

								const yPos = y.getPixelForValue(median);

								ctx.save();
								ctx.beginPath();
								ctx.moveTo(left, yPos);
								ctx.lineTo(right, yPos);
								ctx.lineWidth = 3;
								ctx.setLineDash([5, 5]);
								ctx.strokeStyle = "#FF0000";
								ctx.stroke();
								ctx.restore();

								ctx.fillStyle = "#FFFFFF";
								ctx.fillRect(left + 5, yPos - 20, 100, 20);

								ctx.fillStyle = "#FF0000"; // Text color
								ctx.font = "bold 14px Arial";
								ctx.fillText(`Median: ${median.toFixed(2)}`, left + 10, yPos - 5);
							},
						},
					],
					data: {
						labels: labels,
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
										return `${value} `;
									},
								},
							},
							x: {
								ticks: {
									callback: function (value, index, ticks) {
										return `${moment(labels[index]).format("DD")}`;
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
		}
	};

	useEffect(() => {
		getFairScoreChartData(period).then((v) => {
			setLoading(false);
		});
	}, [period]);

	useEffect(() => {
		const dateArray = buildLabels(period.startDate, period.endDate);
		const labels = dateArray.map((date: any) => date.format("YYYY-MM-DD"));

		const filterByUsername: any = selectedOptions?.map((v: any) => {
			return v?.value;
		});

		let datasetsBuilderOption = {
			filterByUsername: filterByUsername,
		};

		const dataGroupedByUsername = groupDataByUsername(fairScoreData);

		let datasetsBuilded = buildDatasets(
			dataGroupedByUsername,
			labels,
			datasetsBuilderOption,
		);

		// const datasetsWithColor = datasetsBuilded?.map((v: any) => {
		// 	return {
		// 		...v,
		// 		backgroundColor: createGradient(chartRef),
		// 	};
		// });

		const generateColors = (index) => {
			const primaryColors = [
				"#FFA500", "#FFD700", "#FF4500", "#DA70D6", "#BA55D3", "#9370DB", "#8A2BE2", "#6A5ACD", "#7B68EE", "#483D8B",
				"#D2691E", "#CD853F", "#F4A460", "#DEB887", "#BC8F8F", "#8B4513", "#A0522D", "#D2B48C", "#F0E68C", "#FFE4B5"
			];

			return index < primaryColors.length ? primaryColors[index] : "#BDC3C7";
		};

		const datasetsWithColor = datasetsBuilded?.map((v: any, index: number) => {
			return {
				...v,
				backgroundColor: createGradient(chartRef),
				borderColor: generateColors(index),
				pointBackgroundColor: generateColors(index),
			};
		});

		setDatasets(datasetsBuilded);
		drawChart(labels, datasetsWithColor);
		// setPermaOptions(options);
		// setSelectedOptions(options);
	}, [fairScoreData, selectedOptions, period.startDate, period.endDate]);

	useEffect(() => {
		if (!permaOptions || permaOptions.length === 0) {
			setPermaOptions(options);
			setSelectedOptions(options);
			setParentSelectedOption(options)
		}
	}, [options]);

	return (
		<div
			className={`flex w-full flex-col justify-between rounded-lg bg-white p-1 dark:bg-darkblack-600 lg:px-8 lg:py-7 h-[400px] shadow-[4px_0_8px_rgba(0,0,0,0.05)]`}
		>
			<div className={`mb-2 flex items-center justify-between gap-5 p-3`}>
				<div>
					<span className="text-sm font-medium text-bgray-600 dark:text-white">
						FAIR Score
					</span>
					<div className="flex items-center space-x-2">
						<h3 className="text-xl font-bold leading-[36px] text-bgray-900 dark:text-white sm:text-2xl">
							{period.startDate != null &&
							period.endDate != null ? (
								<span>
									{moment(period.startDate).format(
										"DD MMM YYYY",
									)}{" "}
									{period.endDate
										? ` - ${moment(period.endDate).format("DD MMM YYYY")}`
										: ""}
								</span>
							) : (
								""
							)}
						</h3>
						{/*<span className="text-sm font-medium text-success-300">+20%</span>*/}
					</div>
				</div>
				<div className="date-filter relative flex flex-row gap-5">
					<OurDatePicker
						applyCallback={(v) => {
							setPeriod({
								startDate: v[0],
								endDate: v[1],
							});
							setParentPeriod({
								startDate: v[0],
								endDate: v[1],
							});
						}}
					/>
					<OurSelect
						permaOptions={permaOptions}
						options={options}
						disabled={false}
						setParentSelectedOption={setSelectedOptions}
					/>
				</div>
			</div>
			{loading ? (
				<div className={`flex items-center justify-center h-full`}>
					<OurLoading/>
				</div>
			) : fairScoreData?.length ? (
				<div className={`w-full`}>
					<canvas
						id="fairScoreCanvas"
						ref={chartRef}
						height="280"
					></canvas>
				</div>
			) : (
				<div className={`flex items-center justify-center h-full`}>
					<OurEmptyData width={150}/>
				</div>
			)}
		</div>
	);
};

export default FairScoreChart;
