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
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark  ">
            {store.favourites.length > 0 ? (
              store.favourites.map((favourite, index) => {
                let element = "characters";

                if (favourite && favourite.url) {
                  if (favourite.url.includes("planets")) {
                    element = "planets";
                  } else if (favourite.url.inclues("vehicles")) {
                    element = "vehicles";
                  }
                }

                return (
                  <li
                    className="dropdown-item d-flex justify-content-between"
                    key={index}
                  >
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
