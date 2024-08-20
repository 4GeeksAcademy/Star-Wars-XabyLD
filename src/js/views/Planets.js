import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import CartaSW from "../component/CartaSW";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import Image from "../../img/Tatooine_TPM.webp";

export const Planets = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const moreInformation = (id) => {
    navigate(`/planets/${id}`);
  };

  return (
    <div className="container-fluid">
      <div className="grid text-center">
        {store.planets.length === 0 ? (
          <p className="text-center fs-2">La lista de planetas está vacía</p>
        ) : (
          <div className="row row-cols-3">
            {store.planets.map((planet, index) => (
              <div key={index} className="grid-item">
                {index == 0 ? (
                  <CartaSW
                    image={Image}
                    name={planet.properties.name}
                    id={planet.uid}
                    moreInformation={() => moreInformation(planet.uid)}
                    agregarFavoritos={() => actions.sendFavourite(planet.uid)}
                  />
                ) : (
                  <CartaSW
                    image={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                    name={planet.properties.name}
                    id={planet.uid}
                    moreInformation={() => moreInformation(planet.uid)}
                    agregarFavoritos={() =>
                      actions.sendFavouritePlanet(planet.uid)
                    }
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Planets;
