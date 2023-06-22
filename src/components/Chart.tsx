import React, { ReactNode, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);
const ChartComponent = () => {
	const chartRef = useRef<any>();
	const chartOptions = {
		responsive: true,
		animation: {
			duration: 2000, // Animation duration in milliseconds
		},
	};

	const chartData = {
		labels: ["week1", "week2", "week3", "week4", "week5", "week6", "week7", "week8", "week9"],
		datasets: [
			{
				label: "Curve 1",
				data: [12, 19, 3, 5, 2, 3,20,12,11], // Dummy data for curve 1
				borderColor: "rgba(255, 99, 132, 1)",
				backgroundColor: "rgba(255, 99, 132, 0.2)",
			},
			{
				label: "Curve 2",
				data: [5, 10, 15, 10, 8, 12,43,22,13], // Dummy data for curve 2
				borderColor: "rgba(54, 162, 235, 1)",
				backgroundColor: "rgba(54, 162, 235, 0.2)",
			},
		],

	};

	return <Line options={chartOptions} ref={chartRef} data={chartData} />;
};

export default ChartComponent;
