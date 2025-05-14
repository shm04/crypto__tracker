import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Spinner } from '@chakra-ui/react';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const PriceChart = ({ history }) => {
  if (!history) {
    return <Spinner size="lg" />;
  }

  const prices = history.prices.map((item) => item[1]);
  const dates = history.prices.map((item) =>
    new Date(item[0]).toLocaleDateString()
  );

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Precio USD',
        data: prices,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return <Line data={data} />;
};

export default PriceChart;
