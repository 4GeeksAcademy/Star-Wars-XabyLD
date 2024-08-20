import React, { useContext } from "react";
import DescriptionCard from "../component/DescriptionCard";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import image from "../../img/Tatooine_TPM.webp";
import { Link } from "react-router-dom";
import FondoEstrellas from "../../img/FondoEstrellas.webp";

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
      <div
        className="card"
        style={{
          width: "80rem",
          backgroundImage: `url(${FondoEstrellas})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="card-header text-center">
          <img src={image} alt="image from character" />
          <h5 className="card-title mt-2 text-white">
            {findPlanet.properties.name}
          </h5>
        </div>
        <div className="d-flex justify-content-between">
          <div className="card-body">
            <ul className="text-white list-group fw-bold">
              <span className="text-white">Basic information</span>
              <li className="list-group-item">
                Climante: {findPlanet.properties.climate}
              </li>
              <li className="list-group-item">
                Diameter: {findPlanet.properties.diameter}
              </li>
              <li className="list-group-item">
                Terrain: {findPlanet.properties.terrain}
              </li>
            </ul>
          </div>

          <div className="card-body">
            <ul className="text-white list-group fw-bold">
              <span className="text-white">Another interested information</span>
              <li className="list-group-item">
                Orbital Period: {findPlanet.properties.orbital_period}
              </li>
              <li className="list-group-item">
                Gravity: {findPlanet.properties.gravity}
              </li>
              <li className="list-group-item">
                Rotation Period: {findPlanet.properties.rotation_period}
              </li>
            </ul>
          </div>
        </div>
        <Link to={`/planets/${randomPlanet().uid}`}>
          <div className="d-flex justify-content-center">
            <button className="mt-3" type="button">
              Try with a random planet
            </button>
          </div>
        </Link>
      </div>
    </div>
  ) : (
    <div className="container-flex d-flex justify-content-center">
      <div
        className="card"
        style={{
          width: "80rem",
          backgroundImage: `url(${FondoEstrellas})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="card-header text-center">
          <img src={image} alt="image from character" />
          <h5 className="card-title mt-2 text-white">
            {findPlanet.properties.name}
          </h5>
        </div>
        <div className="d-flex justify-content-between">
          <div className="card-body">
            <ul className="text-white list-group fw-bold">
              <span className="text-white">Basic information</span>
              <li className="list-group-item">
                Climante: {findPlanet.properties.climate}
              </li>
              <li className="list-group-item">
                Diameter: {findPlanet.properties.diameter}
              </li>
              <li className="list-group-item">
                Terrain: {findPlanet.properties.terrain}
              </li>
            </ul>
          </div>

          <div className="card-body">
            <ul className="text-white list-group fw-bold">
              <span className="text-white">Another interested information</span>
              <li className="list-group-item">
                Orbital Period: {findPlanet.properties.orbital_period}
              </li>
              <li className="list-group-item">
                Gravity: {findPlanet.properties.gravity}
              </li>
              <li className="list-group-item">
                Rotation Period: {findPlanet.properties.rotation_period}
              </li>
            </ul>
          </div>
        </div>
        <Link to={`/planets/${randomPlanet().uid}`}>
          <div className="d-flex justify-content-center">
            <button className="mt-3" type="button">
              Try with a random planet
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PlanetsIndividualInfo;
