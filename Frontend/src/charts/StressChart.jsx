import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function StressChart() {
  const data = {
    labels: ["Stress", "Cognitive Load"],

    datasets: [
      {
        label: "Score",
        data: [85, 72],
      },
    ],
  };

  return <Bar data={data} />;
}

export default StressChart;