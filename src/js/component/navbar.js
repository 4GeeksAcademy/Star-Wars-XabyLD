import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Lightsaber-Green-icon_34496.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img src={logo} alt="Imagen Logo"></img>
      </Link>
      <div className="ml-auto">
        <div className="dropdown me-3">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            List Favourites
          </button>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
            {store.favourites.length > 0 ? (
              store.favourites.map((favourite, index) => {
                let element = "characters"; // Valor por defecto
                console.log(JSON.stringify(favourite, null, 2));

                // Cambiar a 'planets' o 'vehicles' según la URL
                if (favourite.properties.url.includes("planets")) {
                  element = "planets";
                  console.log("Elemento dentro de planetas", element);
                } else if (favourite.properties.url.includes("vehicles")) {
                  element = "vehicles";
                  console.log("Elemento dentro de vehiculos", element);
                }
                console.log("Elemento fuera de los if ", element);

                return (
                  <li
                    className="dropdown-item d-flex justify-content-between"
                    key={index}
                  >
                    {console.log(element)}
                    {console.log(favourite.uid)}
                    <Link to={`/${element}/${favourite.uid}`}>
                      <span>{favourite.properties.name}</span>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => actions.deleteFavourite(favourite.uid)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </li>
                );
              })
            ) : (
              <li>
                <span className="dropdown-item text-muted">
                  No hay favoritos
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
