import { IBalanceTypeDistribuition } from "services/TransparenceService";
import { formatPercentage } from "utils";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ChartOptions,
  ArcElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

interface IBalanceDistribuitionChart {
  data: IBalanceTypeDistribuition[];
}

export const chartColors = [
  '#003f5c',
  '#444e86',
  '#955196',
  '#dd5182',
  '#ff6e54',
  '#ffa600',
];

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, ChartDataLabels, {
  id: 'customSpacingLegend',
  beforeInit(chart) {
    // Get reference to the original fit function
    const originalFit = (chart as any).legend.fit;

    // Override the fit function
    (chart as any).legend.fit = function fit() {
      // Call original function and bind scope in order to use `this` correctly inside it
      originalFit.bind(chart.legend)();
      // Change the height as suggested in another answers
      this.height += 24;
    }
  }
});

export const BalanceDistribuitionChart: React.FC<IBalanceDistribuitionChart> = ({ data }) => {

  const labels = data.map(({type}) => type);

  const options: ChartOptions = {
    maintainAspectRatio: false,
    font: {
      family: 'Roboto',
      weight: '500',
      size: 12,
    },
    scales: {
      x: {
        display: false,
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
        bottom: 24,
      },
    },
    plugins: {
      legend: {
        labels: {
          padding: 16,
          pointStyle: 'circle',
          usePointStyle: true
        },
        position: 'top',
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
        offset: 8,
        color: labels.map((data, index) => chartColors[index]),
        formatter: function (value: number) {
          return formatPercentage(value);
        }
      }
    }
  };


  const chartData = {
    labels: labels,
    datasets: [{
      backgroundColor: labels.map((data, index) => chartColors[index]),
      data: data.map(({value}) => value),
    }],
  };

  return (
    <Doughnut data={chartData} plugins={[ChartDataLabels]} options={options as any} />
  );
}
