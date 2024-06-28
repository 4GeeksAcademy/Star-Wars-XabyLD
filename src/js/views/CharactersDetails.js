import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import CartaSW from "../component/CartaSW";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

export const CharactersDetails = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  console.log(store.characters);

  const moreInformation = (id) => {
    navigate(`/characters/${id}`);
  };

  return (
    <div className="text-center">
      <button onClick={actions.getCharacters}>Load Data</button>
      <div className="grid-container text-center">
        {store.characters.length === 0 ? (
          <p className="text-center fs-2">La lista de personajes está vacía</p>
        ) : (
          store.characters.map((character, index) => (
            <div key={index} className="grid-item">
              <CartaSW
                key={index}
                name={character.name}
                id={character.uid}
                moreInformation={() => moreInformation(character.uid)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
