import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
    <div className="img-container img-fluid mt-5">
      <img alt={props.name} src={props.image} onClick={props.handleIncrement}/>
    </div>
);


export default PlayerCard;