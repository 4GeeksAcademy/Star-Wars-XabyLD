import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const VehiclesIndividualInfo = () => {
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
      <div className="card" style={{ width: "75rem" }}>
        <div className="card-body text-center">
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${findVehicle.uid}.jpg`}
            alt="image from vehicle"
          />
          <h5 className="card-title mt-2">{findVehicle.properties.name}</h5>
          <p className="card-text">{findVehicle.uid}</p>
          <Link to={`/vehicles/${randomVehicles().uid}`}>
            <button type="button">Try with a random vehicle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehiclesIndividualInfo;
