// @ts-nocheck
import { useState } from 'react';
import './App.css';
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Container }  from "./components/container/Container";
import players from "./players.json";
import { PlayerCard } from "./components/player-card/PlayerCard";

export const App = () => {
  const [count, setCount] = useState(0); // Keeps track of number of correct guesses/clicks without clicking an image twice.
  const [topScore, setTopScore] = useState(0); // Keeps track of user's top score.
  // Various messages that the user will see in the top navigation bar when playing the game.
  const [message, setMessage] = useState("Click an image to earn points but don't click an image more than once.");

  // Run updatePlayerClickedValue when user clicks on an image.
  const updatePlayerClickedValue = id => {

    // Filter players for player with an id equal to the id being clicked.
    const clickedPlayer = players.filter(clickedPlayer => clickedPlayer.id === id);

    // If the player has not yet been clicked by the user (clicked === false), then
    if (clickedPlayer[0].clicked === "false") {

      // Set the player's clicked property to true.
      clickedPlayer[0].clicked = "true";

      // Update the count - number of correct guesses/clicks without clicking an image twice.
      // Update the game message in the top navigation bar.
      setCount(count => count + 1);
      setMessage("Way to go! You haven't clicked that one yet. Keep clicking!");
    }

    // if the player has already clicked the image once already, then
    else if (clickedPlayer[0].clicked === "true") {
      // Update the game message to tell the user that the player has already been clicked. Reset the game.
      // Update the count - number of correct clicks - back to 0 to reset the game.
      // Update the top score.
      setMessage('You already clicked that player. Now you have to start over.')
      setCount(0);
      setTopScore(count + 1)

      // For every player, set the clicked value back to false.
      players.forEach(player => player.clicked = "false");
    }

    // if user clicks all images without clicking on an image more than once (that is, count = 11), the user won.
    if (count === 11) {
      // Update the game message to tell the user that they won. Reset the game.
      // Update the count - number of correct clicks - back to 0 to reset the game.
      // Update the top score.
      setMessage('You won! Bet you cannot do it again.');
      setCount(0);
      setTopScore(count);

      // For every player, set the clicked value back to false.
      players.forEach(player => player.clicked = "false");
    }

    // Randomize 
    // Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.
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
        topScore ={topScore}
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
