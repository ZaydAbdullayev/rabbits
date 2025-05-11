import React, { useEffect, useState } from "react";
import "./home.css";
import video from "./assets/rabbit.mp4";
import { RiTwitterXFill } from "react-icons/ri";
import { RealTimeBarChart, RealTimeLineChart } from "./components/chart";
import { MdOutlineSsidChart } from "react-icons/md";

export const App = () => {
  const [metrics, setMetrics] = useState({
    activity: 78,
    food: 32,
    water: 95,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        activity: Math.floor(60 + Math.random() * 40),
        food: Math.floor(20 + Math.random() * 30),
        water: Math.floor(70 + Math.random() * 30),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <p>Rodentia Research Labs</p>
        <div className="df aic header-buttons">
          <button
            className="df aic gap-10"
            onClick={() => {
              window.open("https://x.com/trenches_frogs", "_blank");
            }}
          >
            <RiTwitterXFill style={{ transform: "scale(1.6)" }} />
          </button>
          <button className="df aic gap-10">
            <span>▶ </span>LIVE FEED
          </button>
          <button>EXPORT</button>
          <button>ALERTS</button>
        </div>
      </header>

      <div className="df fw dashboard-main">
        <section className="chamber-section">
          <p>O Observation</p>
          <div className="chamber-image">
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="chamber-stats">
            <div className="df fdc gap-20 stat">
              <p className="fs-24">SUBJECT A-108</p>
              <div className="df aic ss">
                <div className="df fdc gap-20">
                  <span className="fs-18">Average</span>
                  <svg className="pulse-line" viewBox="0 0 100 10">
                    <path
                      d="M0 5 L10 0 L20 5 L30 2 L40 5 L50 3 L60 5 L70 1 L80 5 L90 4 L100 5"
                      stroke="#d6ad60"
                      strokeWidth="1"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="fs-18">AVA 11</span>
                </div>
                <p className="fs-32">{metrics.water}%</p>
              </div>
            </div>
          </div>
          <div className=" w100 metrics">
            <div className="metric">
              <p className="p-v-10 fs-24">CHAMBER TEMP</p>
              <div className="bar-wrapper">
                <div
                  className="df aic bar"
                  style={{ width: `${metrics.activity}%` }}
                >
                  <h3>{metrics.activity}%</h3>
                </div>
              </div>
              <p className="w100 df aic ch-d">Optimal range</p>
            </div>
            <div className="metric">
              <p className="p-v-10 fs-24">HUMIDITY</p>
              <div className="bar-wrapper">
                <div
                  className="df aic bar"
                  style={{ width: `${metrics.food}%` }}
                >
                  <h3>{metrics.food}%</h3>
                </div>
              </div>
              <p className="w100 df aic ch-d">Optimal range</p>
            </div>
          </div>
        </section>

        <aside className="df fdc gap-20 subjects-section">
          <p>EXPERIMENTAL ANALYTICS</p>
          <div className="w100 df fdc gap-10 chart">
            <p>ACTIVITY LEVEL</p>
            <RealTimeLineChart />
          </div>

          <div className="w100 df fdc gap-10 chart">
            <div className="w100 df aic jcsb fs-20">
              <p>RR-364</p>
              <p>Compound A</p>
            </div>
            <RealTimeLineChart />
          </div>
          <div className="w100 df fdc gap-10 chart">
            <div className="w100 df aic jcsb fs-20">
              <p>RR-147</p>
              <p>Electrical Stimulation</p>
            </div>
            <RealTimeBarChart />
          </div>
          <div className="w100 df fdc gap-10 chart">
            <div className="w100 df aic jcsb fs-20">
              <p>RR-125</p>
              <p>Pathogen X</p>
            </div>
            <RealTimeLineChart />
          </div>
        </aside>
      </div>
      <footer className="w100 df fdc aic jcc gap-10 dashboard-footer">
        <p>© 2025 Rodentia Research Labs</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
};
