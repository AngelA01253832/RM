import { useMemo } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler,} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const scores = [76,78,75,78,74,78,78];
const labels = [1,2,3,4,5,6,7];

const options = {
  fill: true,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export function WeightProgressChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Mis datos",
          data: scores,
          tension: 0.3,
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 6,
          pointBackgroundColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },
      ],
      labels,
    };
  }, []);

  return <Line data={data} options={options} />;
}