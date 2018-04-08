import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Footer from "./Components/Footer";
import Container from "./Components/Container";
import players from "./players.json";
import PlayerCard from "./Components/PlayerCard";
import ScoreCounter from "./Components/ScoreCounter";
import AlreadyClickedModal from "./Components/AlreadyClickedModal";

let count = 0;
let topScore = 0;
let Message = `Score: ${count} Top Score: ${topScore}`;

class App extends Component {
  // Setting this.state.players to the players json array
  state = {
    players,
    count,
    topScore,
    Message
  }


  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    console.log(players);
  };

  updatePlayerClickedValue = id => {
    console.log(`${id}, clicked`);
    //Filter this.state.players for player with an id not equal to the id being clicked
    const clickedPlayer = this.state.players.filter(clickedPlayer => clickedPlayer.id === id);
    console.log(clickedPlayer);
    if (clickedPlayer[0].clicked === "false") {
      clickedPlayer[0].clicked = "true";
      console.log(clickedPlayer);
      // We always use the setState method to update a component's state
      this.setState({ count: this.state.count + 1 });
      this.setState({ Message: "Way to go! You haven't clicked that one yet. Keep clicking!" });
    }

    else {
      this.setState({ Message: "You already clicked that player. Now you have to start over." });
      console.log(Message);
      this.setState({ count: 0});
      for (let i = 0; i < players.length; i++) {
        players[i].clicked = "false";
      }
      console.log(players);
      // We always use the setState method to update a component's state
      this.setState({ count: 0});
      console.log(players);
    }

    //Randomize 
    //Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (let i = players.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [players[i], players[j]] = [players[j], players[i]];
    }
  };


  render() {
    return [
      <Navbar
        count={this.state.count}
        Message={this.state.Message}  
      />,
      <Jumbotron  
      />,
      <Container>

        <div className="row">
          <div className="col-md-3">
            {this.state.players.slice(0,3).map(player => (
              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}
                updatePlayerClickedValue = {this.updatePlayerClickedValue}      
                handleIncrement={this.handleIncrement}
              />
            ))}
          </div>
          <div className="col-md-3">
            {this.state.players.slice(3,6).map(player => (
              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}
                image={player.image}
                updatePlayerClickedValue = {this.updatePlayerClickedValue}
                handleIncrement={this.handleIncrement}
              />
            ))}
          </div>
          <div className="col-md-3">
            {this.state.players.slice(6,9).map(player => (
              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}
                image={player.image}
                updatePlayerClickedValue = {this.updatePlayerClickedValue}
                handleIncrement={this.handleIncrement}
              />
            ))}
          </div>
          <div className="col-md-3">
            {this.state.players.slice(9,12).map(player => (
              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}
                image={player.image}
                updatePlayerClickedValue = {this.updatePlayerClickedValue}
                handleIncrement={this.handleIncrement}
              />
            ))}
          </div>
        </div>
      </Container>,
      <Footer />,
      <AlreadyClickedModal />
    ];
  }
}

export default App;
