import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Footer from "./Components/Footer";
import Container from "./Components/Container";
import players from "./players.json";
import PlayerCard from "./Components/PlayerCard";


class App extends Component {
  // Setting this.state.players to the players json array
  state = {
    players
  }

  render() {
    return [
      <Navbar />,
      <Jumbotron />,
      <Container>
        <div className="row">
          <div className="col-md-3">
            {this.state.players.slice(0,3).map(player => (
              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}
              />
            ))}
          </div>
          <div className="col-md-3">
            {this.state.players.slice(4,7).map(player => (
              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}
              />
            ))}
          </div>
          <div className="col-md-3">
            {this.state.players.slice(5,8).map(player => (
              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}
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
              />
            ))}
          </div>
        </div>
      </Container>,
      <Footer />
    ];
  }
}

export default App;
