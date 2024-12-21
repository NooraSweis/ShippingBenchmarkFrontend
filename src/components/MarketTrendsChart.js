import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const MarketTrendsChart = ({ data }) => {
    // Transform the data into a format suitable for the chart
    const labels = data.map((entry) => entry.date);
    const userPrices = data.map((entry) => entry.user_price);
    const medianPrices = data.map((entry) => entry.median_price);
    const percentile10Price = data.map((entry) => entry.percentile_10_price);
    const percentile90Price = data.map((entry) => entry.percentile_90_price);

    const chartData = {
        labels,
        datasets: [
            {
                label: 'User Price',
                data: userPrices,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'Median Market Price',
                data: medianPrices,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
            {
                label: 'Percentile 10 Market Price',
                data: percentile10Price,
                borderColor: 'rgb(75,118,192)',
                backgroundColor: 'rgba(28,130,232,0.2)',
            },
            {
                label: 'Percentile 90 Market Price',
                data: percentile90Price,
                borderColor: 'rgb(7,63,159)',
                backgroundColor: 'rgba(0,58,115,0.2)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Market vs. User Price Trends',
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default MarketTrendsChart;
