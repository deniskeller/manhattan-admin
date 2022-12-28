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
import faker from 'faker';

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

const labels = [
  '01.01.22',
  '02.01.22',
  '03.01.22',
  '04.01.22',
  '05.01.22',
  '06.01.22',
  '07.01.22',
];

const LineGraph: React.FC<Props> = () => {
  const data = {
    labels: [
      '01.01.22',
      '02.01.22',
      '03.01.22',
      '04.01.22',
      '05.01.22',
      '06.01.22',
      '07.01.22',
    ],
    datasets: [
      {
        label: 'Balance',
        data: [32, 35, 40, 40, 32, 35, 31],
        fill: 'start',
        backgroundColor: ({ chart }) => {
          const gradient = chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(50, 66, 154, .3)');
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
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: 2,
        borderColor: '#2e3c8d',
      },
      point: {
        borderColor: '#2e3c8d',
        backgroundColor: '#fff',
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
