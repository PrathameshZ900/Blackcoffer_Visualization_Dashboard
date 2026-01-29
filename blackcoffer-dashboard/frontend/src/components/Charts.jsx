import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Charts({ data }) {
  const countBy = (key) => {
    const map = {};
    data.forEach((d) => {
      if (!d[key]) return;
      map[d[key]] = (map[d[key]] || 0) + 1;
    });
    return map;
  };

  const topics = countBy("topic");
  const regions = countBy("region");

  const barData = {
    labels: Object.keys(topics),
    datasets: [
      {
        label: "Topics",
        data: Object.values(topics),
        borderRadius: 12,
        backgroundColor: "rgba(79, 70, 229, 0.7)",
      },
    ],
  };

  const pieData = {
    labels: Object.keys(regions),
    datasets: [
      {
        data: Object.values(regions),
        backgroundColor: [
          "#4f46e5",
          "#06b6d4",
          "#22c55e",
          "#f59e0b",
          "#ec4899",
          "#8b5cf6",
        ],
      },
    ],
  };

  const intensityByYear = {};
  data.forEach((d) => {
    if (!d.end_year) return;
    intensityByYear[d.end_year] =
      (intensityByYear[d.end_year] || 0) + (d.intensity || 0);
  });

  const lineData = {
    labels: Object.keys(intensityByYear),
    datasets: [
      {
        label: "Intensity",
        data: Object.values(intensityByYear),
        tension: 0.45,
        borderWidth: 3,
        borderColor: "#06b6d4",
        pointRadius: 4,
        pointBackgroundColor: "#06b6d4",
      },
    ],
  };

  return (
    <div className="charts-grid">
      <div className="chart-card">
        <div className="chart-title">Topics Distribution</div>
        <Bar data={barData} />
      </div>

      <div className="chart-card">
        <div className="chart-title">Region Share</div>
        <Pie data={pieData} />
      </div>

      <div className="chart-card">
        <div className="chart-title">Intensity Trend by Year</div>
        <Line data={lineData} />
      </div>
    </div>
  );
}
