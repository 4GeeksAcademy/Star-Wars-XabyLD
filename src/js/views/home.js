import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react";
import FondoSW from "../../img/Fondo.webp";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex  align-items-center ">
          <ul className="custom-list text-center me-3 fs-5  ">
            <li className="nav-item">
              <Link to="/characters">Characters</Link>
            </li>
            <li className="nav-item">
              <Link to="/planets">Planets</Link>
            </li>
            <li className="nav-item">
              <Link to="/vehicles">Vehicles</Link>
            </li>
          </ul>
          <div className="">
            <div
              style={{
                backgroundImage: `url(${FondoSW})`,
                backgroundSize: "cover",
                height: "100vh",
                width: "120vh",
              }}
            >
              1
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
