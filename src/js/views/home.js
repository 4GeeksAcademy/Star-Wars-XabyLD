import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="text-start">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/characters">Characters</Link>
          </li>
          <li className="nav-item">
            <Link to="/planets">Planets</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              StarShips
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-disabled="true">
              Vehicles
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
