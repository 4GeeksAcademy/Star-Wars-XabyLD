import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const DescriptionCard = ({ name, image, id }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <img src={image} alt={name} />
        <h5>{id}</h5>
      </div>
    </div>
  );
};

export default DescriptionCard;
