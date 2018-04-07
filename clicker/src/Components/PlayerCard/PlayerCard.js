import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
    <div className="img-container img-fluid mt-5">
      <img alt={props.name} src={props.image} />
    </div>
);


export default PlayerCard;