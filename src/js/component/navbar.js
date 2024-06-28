import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Lightsaber-Green-icon_34496.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img src={logo} alt="Imagen Logo"></img>
      </Link>
      <div className="ml-auto">
        <Link to="/favorites">
          <button className="btn btn-primary">Favorites</button>
        </Link>
      </div>
    </nav>
  );
};
