import { useEffect, useState } from "react";
import { fetchData } from "../api";
import Filters from "./Filters";
import Charts from "./Charts";
import "../index.css";

export default function Dashboard() {
  const [data, setData] = useState([]);

  const loadData = async (filters = {}) => {
    const res = await fetchData(filters);
    setData(res.data);
  };

  useEffect(() => {
    (async () => {
      const res = await fetchData();
      setData(res.data);
    })();
  }, []);

  const avg = (key) =>
    data.length
      ? (data.reduce((s, d) => s + (d[key] || 0), 0) / data.length).toFixed(1)
      : 0;

  return (
    <div className="app-container">
      <div className="header">
        <h2>Blackcoffer Dashboard</h2>
        <p>Interactive Data Insights</p>
      </div>

      <div className="card">
        <Filters data={data} onChange={loadData} />
      </div>

      <div className="stats">
        <div className="stat-box stat-blue">
          <h3>{data.length}</h3>
          <p>Total Records</p>
        </div>
        <div className="stat-box stat-purple">
          <h3>{avg("intensity")}</h3>
          <p>Avg Intensity</p>
        </div>
        <div className="stat-box stat-green">
          <h3>{avg("likelihood")}</h3>
          <p>Avg Likelihood</p>
        </div>
      </div>

      <div className="chart-box">
        <Charts data={data} />
      </div>
    </div>
  );
}
