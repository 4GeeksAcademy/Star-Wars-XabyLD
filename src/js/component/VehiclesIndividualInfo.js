import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import FondoEstrellas from "../../img/FondoEstrellas.webp";

const vehiclesIndividualInfo = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  console.log(store.vehicles);

  const randomVehicles = () => {
    const random = Math.floor(Math.random() * store.vehicles.length);
    const randomVehicle = store.vehicles[random];
    return randomVehicle;
  };

  const findVehicle = store.vehicles.find((vehicle) => vehicle.uid === id);
  console.log(findVehicle);

  if (!findVehicle) {
    return <h1>No encontramos el vehiculo</h1>;
  }

  return (
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
        <div className="card-body text-center">
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${findVehicle.uid}.jpg`}
            alt="image from vehicle"
          />
          <h5 className="card-title mt-2 text-white fw-bold">
            {findVehicle.properties.name}
          </h5>
          <div className="d-flex justify-content-between">
            <div className="card-body">
              <ul className="text-white list-group fw-bold">
                <span className="text-white">Basic information</span>
                <li className="list-group-item">
                  Model: {findVehicle.properties.model}
                </li>
                <li className="list-group-item">
                  Class: {findVehicle.properties.vehicle_class}
                </li>
                <li className="list-group-item">
                  Crew: {findVehicle.properties.crew}
                </li>
              </ul>
            </div>
            <div className="card-body">
              <ul className="text-white list-group fw-bold">
                <span className="text-white">
                  Another interested information
                </span>
                <li className="list-group-item">
                  Max Speed: {findVehicle.properties.max_atmosphering_speed}
                </li>
                <li className="list-group-item">
                  Passengers: {findVehicle.properties.passengers}
                </li>
                <li className="list-group-item">
                  Capacity: {findVehicle.properties.cargo_capacity}
                </li>
              </ul>
            </div>
          </div>
          <Link to={`/vehicles/${randomVehicles().uid}`}>
            <button type="button">Try with a random vehicle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default vehiclesIndividualInfo;
