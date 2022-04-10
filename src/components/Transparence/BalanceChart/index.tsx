import { IMonthBalance } from "services/TransparenceService";
import { theme } from "styles/colors";
import { formatPercentage, months } from "utils";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

interface IBalanceChart {
  data: IMonthBalance[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const BalanceChart: React.FC<IBalanceChart> = ({ data }) => {
  const historicalData = [...data];
  historicalData.reverse();

  const labels = historicalData.map(({month}) => `${months[month.getMonth()].substring(0,3)}/${month.getFullYear().toString().substring(2,4)}`);

  const options: ChartOptions = {
    maintainAspectRatio: false,
    font: {
      family: 'Roboto',
      weight: '500',
      size: 12,
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Roboto',
            weight: '500',
          },
          color: theme.colors.black,
        },
        grid: {
          display: false
        },
      },
      y: {
        display: false,
        grid: {
          display: false
        }
      },
    },
    layout: {
      padding: {
        top: 24,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        font: {
          family: 'Roboto',
          weight: 500,
          size: 12
        },
        anchor: 'end',
        align: 'end',
        offset: 4,
        color: theme.colors.black,
        formatter: function (value: number) {
          return formatPercentage(value);
        }
      }
    }
  };

  const chartData = {
    labels: labels,
    datasets: [{
      backgroundColor: [...Array(labels.length-1).fill(theme.colors.black), theme.colors.pink],
      data: historicalData.map(month => month.value),
      color: theme.colors.black,
    }],
  };

  return (
    <Bar data={chartData} plugins={[ChartDataLabels]} options={options as any} />
  );
}
