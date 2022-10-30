import "./navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ activePlanet, showNav, setShowNav, planetData }) => {
  const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  const planetsImages = [
    { name: "Mercury", url: "/assets/planet-mercury.svg" },
    { name: "Venus", url: "/assets/planet-venus.svg" },
    { name: "Earth", url: "/assets/planet-earth.svg" },
    { name: "Mars", url: "/assets/planet-mars.svg" },
    { name: "Jupiter", url: "/assets/planet-jupiter.svg" },
    { name: "Saturn", url: "/assets/planet-saturn.svg" },
    { name: "Uranus", url: "/assets/planet-uranus.svg" },
    { name: "Neptune", url: "/assets/planet-neptune.svg" },
  ];

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">THE PLANETS</div>
        <img
          src="/assets/more-icon.png"
          alt=""
          className="more-icon"
          onClick={() => setShowNav(!showNav)}
        />
        <div className="right">
          {planets.map((planet) => (
            <Link
              to={`/planets/${planet}`}
              className={
                activePlanet === planet
                  ? `planet active ${activePlanet}`
                  : "planet"
              }
              key={planet}
            >
              {planet}
            </Link>
          ))}
        </div>
      </div>

      {showNav && (
        <div className="res-nav">
          <div className="wrap">
            {planetsImages.map((planet) => (
              <Link
                to={`/planets/${planet.name}`}
                className="item"
                key={planet.name}
                onClick={() => setShowNav(false)}
              >
                <div className="left">
                  <img src={planet.url} alt="planet-icon" />
                  <span className={"planet"}>{planet.name}</span>
                </div>
                <div className="right">{">"}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
