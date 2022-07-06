import "./PlayerCard.css";

export const PlayerCard = props => (
  <div className="img-container img-fluid mt-5">
    <img
      alt={props.player.name}
      src={props.player.image}
      data-id={props.player.id}
      onClick={props.onClickPlayer}
    />  
  </div>
);
