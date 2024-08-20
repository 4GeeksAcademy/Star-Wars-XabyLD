import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import DescriptionCard from "../component/DescriptionCard";
import FondoEstrellas from "../../img/FondoEstrellas.webp";

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
    const randomCharacter = store.characters[random];
    return randomCharacter;
  };

  const randomVehicles = () => {
    const random = Math.floor(Math.random() * store.vehicles.length);
    const randomVehicle = store.vehicles[random];
    return randomVehicle;
  };

  return (
    <div className="container-fluid">
      <div
        className="card d-flex justify-content-center"
        style={{
          width: "80rem",
          backgroundImage: `url(${FondoEstrellas})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="card-header text-center">
          <div className="d-flex justify-content-center ">
            {
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                alt="image from character"
              />
            }

            <div className="text-center d-flex flex-column justify-content-center ms-5">
              <h5 className="card-title mt-2 text-white">
                {character.properties.name}
              </h5>
              <p className="text-center text-white">{character.description}</p>
            </div>
          </div>
          <div className="card-body d-flex justify-content-between ">
            <div className="d-flex flex-column ">
              <span className="card-title text-white">
                Vehicles Appearances
              </span>
              <div className="d-flex flex-column">
                {store.vehicles.slice(0, 3).map((index) => (
                  <ul className="list-group">
                    <li className="list-group-item" key={index}>
                      {randomVehicles().name}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="d-flex flex-column">
              <span className="card-title text-white">Friends</span>
              <div className="d-flex flex-column">
                {store.characters.slice(0, 3).map((index) => (
                  <ul className="list-group">
                    <li className="list-group-item" key={index}>
                      {randomCharacter().properties.name}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="d-flex flex-column">
              <span className="card-title text-white">Another atributes</span>
              <div className="d-flex flex-column">
                <ul className="list-group">
                  <li className="list-group-item">
                    Height: {character.properties.height}cms
                  </li>
                  <li className="list-group-item">
                    Eyes Color: {character.properties.eye_color}
                  </li>
                  <li className="list-group-item">
                    Skin Color : {character.properties.skin_color}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link to={`/characters/${randomCharacter().uid}`}>
            <button className="mt-3" type="button">
              Try with a random character
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterIndividualInfo;
