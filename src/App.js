import { useState } from 'react';
import './App.css';
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Container }  from "./components/container/Container";
import players from "./players.json";
import { PlayerCard } from "./components/player-card/PlayerCard";
import { initialMessage, playerNotClickedMessage, playerAlreadyClickedMessage, youWonMessage } from './constants/messages';

export const App = () => {
  const [count, setCount] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [message, setMessage] = useState(initialMessage);


  const updatePlayerClickedValue = id => {
    const clickedPlayer = players.filter(clickedPlayer => clickedPlayer.id === id);

    if (clickedPlayer[0].clicked === "false") {
      clickedPlayer[0].clicked = "true";

      setCount(count => count + 1);
      setMessage(playerNotClickedMessage);
    }

    else if (clickedPlayer[0].clicked === "true") {
      setMessage(playerAlreadyClickedMessage)
      setCount(0);
      setTopScore(count + 1)

      players.forEach(player => player.clicked = "false");
    }

    if (count === 11) {
      setMessage(youWonMessage);
      setCount(0);
      setTopScore(count);

      players.forEach(player => player.clicked = "false");
    }

    // Randomize - every time a player is clicked, shuffle players in random order.
    for (let i = players.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [players[i], players[j]] = [players[j], players[i]];
    }
  };

  return (
    <div>
      <Navbar
        count={count}
        message={message}  
        topScore={topScore}
      />
        <Container>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              {players.slice(0,3).map(player => (
                <PlayerCard
                  id={player.id}
                  key={player.id}
                  name={player.name}
                  image={player.image}
                  updatePlayerClickedValue={updatePlayerClickedValue}          
                />
              ))}
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              {players.slice(3,6).map(player => (
                <PlayerCard
                  id={player.id}
                  key={player.id}
                  name={player.name}
                  image={player.image}
                  updatePlayerClickedValue={updatePlayerClickedValue}                
                />
              ))}
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              {players.slice(6,9).map(player => (
                <PlayerCard
                  id={player.id}
                  key={player.id}
                  name={player.name}
                  image={player.image}
                  updatePlayerClickedValue={updatePlayerClickedValue}                
                />
              ))}
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              {players.slice(9,12).map(player => (
                <PlayerCard
                  id={player.id}
                  key={player.id}
                  name={player.name}
                  image={player.image}
                  updatePlayerClickedValue={updatePlayerClickedValue}
                />
              ))}
            </div>
          </div>
        </Container>
      <Footer />
    </div>
  )
};
