import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import CartaSW from "../component/CartaSW";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

import DescriptionCard from "../component/DescriptionCard";
import { Link, useSearchParams } from "react-router-dom";

export const CharactersDetails = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();

  const handleInformation = (id) => {
    navigate(`/characters/${id}`);
  };

  return (
    <div className="container-fluid">
      <div className="grid text-center">
        {store.characters.length === 0 ? (
          <p className="text-center fs-2">La lista de personajes está vacía</p>
        ) : (
          <div className="row row-cols-3">
            {store.characters.map((character, index) => (
              <div key={index} className="col">
                <CartaSW
                  image={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                  name={character.name}
                  id={character.uid}
                  moreInformation={() => {
                    handleInformation(character.uid);
                  }}
                  agregarFavoritos={() => actions.sendFavourite(character.uid)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
