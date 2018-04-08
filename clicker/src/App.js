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


class App extends Component {
  // Setting this.state.players to the players json array
  state = {
    players,
    count: 5
  }

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    return [
      <Navbar />,
      <Jumbotron />,
      <Container>
        <div className="row">
          <div className="col-md-12">
            <ScoreCounter 
              count={this.state.count}
              handleIncrement={this.handleIncrement} 
            />
          </div>
        </div>
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
            {this.state.players.slice(3,6).map(player => (
              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}
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
