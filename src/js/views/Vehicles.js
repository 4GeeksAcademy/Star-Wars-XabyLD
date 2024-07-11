import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import CartaSW from "../component/CartaSW";
import { useNavigate } from "react-router";

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const moreInformation = (id) => {
    navigate(`/vehicles/${id}`);
  };

  return (
    <div className="container-fluid">
      <div className="grid">
        {store.vehicles.length === 0 ? (
          <p className="text-center fs-2">La lista de vehículos está vacía</p>
        ) : (
          <div className="row row-cols-3">
            {store.vehicles.map((vehicle, index) => (
              <div key={index} className="grid-item">
                <CartaSW
                  image={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                  key={index}
                  name={vehicle.name}
                  id={vehicle.uid}
                  moreInformation={() => moreInformation(vehicle.uid)}
                  agregarFavoritos={() =>
                    actions.sendFavouriteVehicle(vehicle.uid)
                  }
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Vehicles;
