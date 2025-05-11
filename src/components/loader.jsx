import "./index.scss";
import { useEffect, useState } from "react";
import frog from "../assets/rabbit.png";

export const Loader = () => {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (loading === 100) return null;

  return (
    <div className="container">
      <div className="loader-container">
        <svg
          className="spinner"
          stroke="#000"
          width="200"
          height="200"
          viewBox="0 0 206 206"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="cut-off-bottom">
              <rect x="0" y="0" width="200" height="100" fill="#000" />
            </clipPath>
          </defs>

          <circle
            className="circle-path"
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="103"
            cy="103"
            r="100"
          ></circle>
        </svg>
        <img src={frog} alt="Frog Icon" id="loader" />
        <div className="df fdc aic gap-10 loader-text">
          <h2>Loading...</h2>
          <div className="loader-percentage"></div>
          <span>{loading}%</span>
        </div>
      </div>
    </div>
  );
};
