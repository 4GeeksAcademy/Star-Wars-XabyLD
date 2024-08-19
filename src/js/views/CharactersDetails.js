import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import CartaSW from "../component/CartaSW";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

export const CharactersDetails = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  console.log(store.characters);
  const params = useParams;

  const handleInformation = (id) => {
    navigate(`/characters/${id}`);
  };
  const mapeado = () => {
    store.characters.map((pruebaCharacter, index) => {
      console.log("Character Name:", pruebaCharacter.properties.name);
    });
  };

  mapeado();

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
                  name={character.properties.name}
                  id={character.uid}
                  eye_color={character.properties.eye_color}
                  mass={character.properties.mass}
                  height={character.properties.height}
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
