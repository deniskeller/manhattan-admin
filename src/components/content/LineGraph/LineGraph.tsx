//@ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import styles from './LineGraph.module.scss';
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
  Filler,
} from 'chart.js';
import { fontSize } from '@mui/system';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface Props {}

const LineGraph: React.FC<Props> = () => {
  const data = {
    labels: [
      'Jun 2022',
      'Jun 2022',
      'Jun 2022',
      'Jun 2022',
      'Jun 2022',
      'Jun 2022',
      'Jun 2022',
    ],
    datasets: [
      {
        label: 'Balance',
        data: [32, 35, 40, 40, 32, 35, 31],
        fill: 'start',
        backgroundColor: ({ chart }) => {
          const gradient = chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(50, 66, 154, .2)');
          gradient.addColorStop(0.2, '#dcdde718');
          gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: { display: false },
      tooltip: {
        titleFont: {
          weight: '500',
          size: 12,
          family: 'Avenir Next',
        },
        footerFont: {
          weight: '500',
          size: 12,
          family: 'Avenir Next',
        },
        displayColors: false,
        padding: 10,
        cornerRadius: 4,
        bodySpacing: 10,
        backgroundColor: '#2E3C8D',
        position: 'nearest',
        callbacks: {
          title: function () {
            return 'Balance';
          },
          label: function (tooltipItem) {
            return (
              tooltipItem.label + '      ' + tooltipItem.formattedValue + '%'
            );
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: 2,
        borderColor: '#2e3c8d',
      },
      point: {
        borderColor: '#2e3c8d',
        borderWidth: 2,
        radius: 2,
        hoverRadius: 3,
        hoverBorderWidth: 2,
      },
    },
  };

  return (
    <div className={styles.LineGraph}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineGraph;
