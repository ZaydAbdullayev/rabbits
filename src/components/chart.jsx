import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const RealTimeLineChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const ctx = chartRef.current.getContext("2d");
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      chartInstanceRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: [1, 2, 3, 4, 5, 6],
          datasets: [
            {
              label: "",
              backgroundColor: "#d6ad60",
              borderColor: "#d6ad6050",
              data: [0, 10, 5, 2, 20, 30, 45],
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    }, 1000);
    const interval = setInterval(() => {
      if (chartInstanceRef.current) {
        const newData = Math.floor(Math.random() * 100);
        chartInstanceRef.current.data.datasets[0].data.push(newData);
        chartInstanceRef.current.data.labels.push(
          chartInstanceRef.current.data.labels.length + 1
        );
        if (chartInstanceRef.current.data.datasets[0].data.length > 10) {
          chartInstanceRef.current.data.datasets[0].data.shift();
          chartInstanceRef.current.data.labels.shift();
        }
        chartInstanceRef.current.update();
      }
    }, 2000);
    return () => {
      clearInterval(interval);
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export const RealTimeBarChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const ctx = chartRef.current.getContext("2d");
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      chartInstanceRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [1, 2, 3, 4, 5, 6],
          datasets: [
            {
              label: "",
              backgroundColor: "#d6ad60",
              borderColor: "#d6ad6050",
              data: [0, 10, 5, 2, 20, 30],
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    }, 1000);
    const interval = setInterval(() => {
      if (chartInstanceRef.current) {
        const newData = Math.floor(Math.random() * 100);
        chartInstanceRef.current.data.datasets[0].data.push(newData);
        chartInstanceRef.current.data.labels.push(
          chartInstanceRef.current.data.labels.length + 1
        );
        if (chartInstanceRef.current.data.datasets[0].data.length > 10) {
          chartInstanceRef.current.data.datasets[0].data.shift();
          chartInstanceRef.current.data.labels.shift();
        }
        chartInstanceRef.current.update();
      }
    }, 2000);
    return () => {
      clearInterval(interval);
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};
