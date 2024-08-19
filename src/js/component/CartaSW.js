import React from "react";
import { useParams } from "react-router";

const CartaSW = ({
  name,
  description,
  height,
  eye_color,
  mass,
  image,
  id,
  moreInformation,
  agregarFavoritos,
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Height: {height}cm</li>
        <li className="list-group-item">Eyes Color: {eye_color}</li>
        <li className="list-group-item">Mass: {mass}</li>
      </ul>
      <div className="card-body d-flex justify-content-between">
        <button onClick={() => moreInformation(id)}>More information</button>
        <button type="button" onClick={() => agregarFavoritos(id)}>
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default CartaSW;
