import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import DescriptionCard from "../component/DescriptionCard";

const CharacterIndividualInfo = () => {
  const { id } = useParams();
  const { store } = useContext(Context);

  // Encontramos el personaje comparando la id del personaje con el params
  const character = store.characters.find((character) => character.uid === id);

  if (!character) {
    return <div>No tenemos tu carta</div>;
  }

  const randomCharacter = () => {
    const random = Math.floor(Math.random() * store.characters.length);
    console.log(random);
    const randomCharacter = store.characters[random];
    console.log(randomCharacter);
    return randomCharacter;
  };

  return (
    <div className="container-flex d-flex justify-content-center">
      <div className="card  " style={{ width: "75rem" }}>
        <div className="card-body text-center ">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
            alt="image from character"
          />
          <h5 className="card-title mt-2">{character.name}</h5>
          <p className="card-text">{character.uid}</p>
          <Link to={`/characters/${randomCharacter().uid}`}>
            <button type="button">Try with a random character</button>
          </Link>
        </div>
      </div>
      {/* Add more character details here */}
    </div>
  );
};

export default CharacterIndividualInfo;
