import React, { useContext } from "react";
import DescriptionCard from "../component/DescriptionCard";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import image from "../../img/Tatooine_TPM.webp";
import { Link } from "react-router-dom";

const PlanetsIndividualInfo = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  console.log(params);

  const findPlanet = store.planets.find((planet) => planet.uid === params.id);
  console.log(findPlanet);

  const randomPlanet = () => {
    const random = Math.floor(Math.random() * store.planets.length);
    const randomPlanet = store.planets[random];
    return randomPlanet;
  };

  if (!findPlanet) {
    return <h1> No hemos encontrado tu planeta</h1>;
  }

  return params.id == 1 ? (
    <div className="container-flex d-flex justify-content-center">
      <div className="card" style={{ width: "75rem" }}>
        <div className="card-body text-center">
          <img src={image} alt="image from character" />
          <h5 className="card-title mt-2">{findPlanet.name}</h5>
          <p className="card-text">{findPlanet.uid}</p>
          <Link to={`/planets/${randomPlanet().uid}`}>
            <button type="button">Try with a random planet</button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="container-flex d-flex justify-content-center´--------------ñ">
      <div className="card" style={{ width: "75rem" }}>
        <div className="card-body text-center">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${findPlanet.uid}.jpg`}
            alt="image from character"
          />
          <h5 className="card-title mt-2">{findPlanet.name}</h5>
          <p className="card-text">{findPlanet.uid}</p>
          <Link to={`/planets/${randomPlanet().uid}`}>
            <button type="button">Try with a random planet</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlanetsIndividualInfo;
