import React from "react";
import "./ViewStats.scss";
import { useNavigate } from "react-router-dom";

const ViewStats = () => {
  const navigate = useNavigate();
  return (
    <div className="viewStats">
      {" "}
      <button onClick={() => navigate("/details")} className="viewStatsButton">
        VIEW STATS
      </button>
    </div>
  );
};

export default ViewStats;
