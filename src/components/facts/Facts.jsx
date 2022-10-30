import "./facts.scss";
import React from "react";

const Facts = ({ planetData }) => {
  return (
    <div className="facts">
      <div className="wrapper">
        <div className="fact-box">
          <div className="fact-title">ROTATION TIME</div>
          <div className="fact">{planetData.rotation}</div>
        </div>

        <div className="fact-box">
          <div className="fact-title">REVOLUTION TIME</div>
          <div className="fact">{planetData.revolution}</div>
        </div>

        <div className="fact-box">
          <div className="fact-title">radius</div>
          <div className="fact">{planetData.radius}</div>
        </div>

        <div className="fact-box">
          <div className="fact-title">AVERAGE TEMP.</div>
          <div className="fact">{planetData.temperature}</div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
