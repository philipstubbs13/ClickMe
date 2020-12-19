// @ts-nocheck
import "./PlayerCard.css";

export const PlayerCard = props => (
  <div className="img-container img-fluid mt-5">
    <img
      alt={props.name}
      src={props.image}
      data-id={props.id}
      onClick={() => props.updatePlayerClickedValue(props.id)}
    />  
  </div>
);