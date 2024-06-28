import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import CartaSW from "../component/CartaSW";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

export const Planets = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const moreInformation = (id) => {
    navigate(`/planets/${id}`);
  };

  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="text-center">
      <div className="grid-container text-center">
        {store.planets.length === 0 ? (
          <p className="text-center fs-2">La lista de personajes está vacía</p>
        ) : (
          store.planets.map((planet, index) => (
            <div key={index} className="grid-item">
              <CartaSW
                key={index}
                name={planet.name}
                id={planet.uid}
                moreInformation={() => moreInformation(planet.uid)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
