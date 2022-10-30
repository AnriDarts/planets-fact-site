import "./planetInfo.scss";
import React, { useState } from "react";

const PlanetInfo = ({ planetData }) => {
  const [description, setDescription] = useState("overview");

  return (
    <div className="planet-info">
      <div className="wrapper">
        <div className="sub-navbar">
          <div className={`options ${planetData.name}`}>
            <div
              className={
                description === "overview"
                  ? "option first active"
                  : "option first"
              }
              onClick={() => setDescription("overview")}
            >
              <span>OVERVIEW</span>
            </div>

            <div
              className={
                description === "structure" ? "option active" : "option"
              }
              onClick={() => setDescription("structure")}
            >
              <span>Structure</span>
            </div>

            <div
              className={
                description === "geology"
                  ? "option third active"
                  : "option third"
              }
              onClick={() => setDescription("geology")}
            >
              <span>Geology</span>
            </div>
          </div>
        </div>

        <div className="left">
          {Object.keys(planetData).length !== 0 &&
            description === "structure" && (
              <img
                src={planetData.images.internal}
                alt="planet"
                className={`planet-img ${planetData.name}`}
              />
            )}

          {Object.keys(planetData).length !== 0 &&
            description !== "structure" && (
              <img
                src={planetData.images.planet}
                alt="planet"
                className={`planet-img ${planetData.name}`}
              />
            )}

          {Object.keys(planetData).length !== 0 &&
            description === "geology" && (
              <img
                src={planetData.images.geology}
                alt="geology"
                className="geology"
              />
            )}
        </div>

        <div className="right">
          <div className="text">
            <div className="title">{planetData.name}</div>
            <div className="description">
              {Object.keys(planetData).length !== 0 &&
                planetData[description].content}
            </div>

            <div className="src">
              Source :{" "}
              <a
                href={
                  Object.keys(planetData).length !== 0
                    ? planetData[description].source
                    : ""
                }
                className="link"
              >
                Wikipedia
              </a>
            </div>
          </div>

          <div className={`options ${planetData.name}`}>
            <div
              className={
                description === "overview" ? "option active" : "option"
              }
              onClick={() => setDescription("overview")}
            >
              <span>
                <span className="num">01</span>
                OVERVIEW
              </span>
            </div>

            <div
              className={
                description === "structure" ? "option active" : "option"
              }
              onClick={() => setDescription("structure")}
            >
              <span>
                <span className="num">02</span>
                Internal Structure
              </span>
            </div>

            <div
              className={description === "geology" ? "option active" : "option"}
              onClick={() => setDescription("geology")}
            >
              <span>
                <span className="num">03</span>
                Surface Geology
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetInfo;
