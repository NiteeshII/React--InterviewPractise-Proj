import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Link } from "react-router-dom";

interface CountryData {
  id: number;
  name: string;
  status: string;
  timeseries: number[];
  highest: number;
  lowest: number;
}

interface LineChartProps {
  countryinfo: CountryData;
}

const LineChart: React.FC<LineChartProps> = ({ countryinfo }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const timeseriesData = countryinfo?.timeseries ?? [];

  // Define chart data
  const chartData = {
    labels: Array.from(
      { length: timeseriesData.length },
      (_, i) => `Day ${i + 1}`
    ),
    datasets: [
      {
        label: "Timeseries Data",
        data: timeseriesData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  // Define chart options
  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Day",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  return (
    <div>
      <h2>Timeseries Data Line Chart</h2>
      <p>
        country Name : <b>{countryinfo?.name}</b> &nbsp; status :{" "}
        <b>{countryinfo?.status}</b>
      </p>
      <div>
        highest :<b>{countryinfo?.highest}</b> &nbsp; Lowest:{" "}
        <b>{countryinfo?.lowest}</b>
      </div>
      <div style={{ maxWidth: "600px", margin: "20px auto" }}>
        <Line data={chartData} options={chartOptions} />
      </div>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default LineChart;
