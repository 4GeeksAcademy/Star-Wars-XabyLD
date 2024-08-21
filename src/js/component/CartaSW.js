import React from "react";
import { useParams } from "react-router";

const CartaSW = ({ name, image, id, moreInformation, agregarFavoritos }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
      </div>

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
