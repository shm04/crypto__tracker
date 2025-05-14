import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import { Spinner, Box } from '@chakra-ui/react';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

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
        label: 'Price (USD)',
        data: prices,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price (USD)',
        },
      },
    },
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mt={4}>
      <Line data={data} options={options} />
    </Box>
  );
};

export default PriceChart;
