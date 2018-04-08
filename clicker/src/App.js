import React, { Component } from 'react';
// import logo from './logo.svg';
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
    players,
    count: 0
  }

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
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
        handleIncrement={this.handleIncrement}   
      />,
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
                handleIncrement={this.handleIncrement}
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
