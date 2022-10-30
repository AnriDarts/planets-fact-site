import "./main.scss";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import PlanetInfo from "../../components/planetInfo/PlanetInfo";
import Facts from "../../components/facts/Facts";
import data from "../../data.json";
import { useParams } from "react-router-dom";

const Main = () => {
  const params = useParams();
  const planet = params.planet;
  const names = data.map(({ name }) => name);

  const [planetData, setPlanetData] = useState([]);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const planetIndex = names.indexOf(planet);
    setPlanetData(data[planetIndex]);
  }, [planet, names]);

  return (
    <div className="main">
      <Navbar activePlanet={planet} showNav={showNav} setShowNav={setShowNav} />
      {!showNav && (
        <>
          <PlanetInfo planetData={planetData} />
          <Facts planetData={planetData} />
        </>
      )}
    </div>
  );
};

export default Main;
