//Impot React since we are using react.
import React, { Component } from 'react';
//Import the App css file to add style the app.
import './App.css';
//Import the app navbar component, which contains the title of the app, the app messaging, and the game scoreboard.
import Navbar from "./Components/Navbar";
//Import the app footer component.
import Footer from "./Components/Footer";
//Import the app container component where the clickable images will go.
import Container from "./Components/Container";
//Import the list of players and images from a json file.
import players from "./players.json";
//Import the player card/image component.
import PlayerCard from "./Components/PlayerCard";

//Define variable to keep track of number of correct guesses/clicks without clicking an image twice.
let count = 0;
//Define variable to keep track of user's top score.
let topScore = 0;
//Define variable that will hold various messages that the user will see when playing the game.
let Message = "Click an image to earn points but don't click an image more than once.";

//Create a class called App that is an extension of Component.
class App extends Component {
  state = {
    //Setting this.state.players to the players json array
    players,
    //Setting this.state.count to the number of correct guesses/clicks without clicking an image twice.
    count,
    //Seeting this.state.topScore to the user's top score.
    topScore,
    //Seeting this.state.Message to the user messages displayed in the top navigation bar.
    Message
  }

  //Run updatePlayerClickedValue when user clicks on an image.
  updatePlayerClickedValue = id => {
    //log the id of the image that was clicked to the console.
    console.log(`${id}, clicked`);
    //Filter this.state.players for player with an id equal to the id being clicked
    const clickedPlayer = this.state.players.filter(clickedPlayer => clickedPlayer.id === id);
    console.log(clickedPlayer);
    //If the player has not yet been clicked by the user (clicked === false), then...
    if (clickedPlayer[0].clicked === "false") {
      //Set the player's clicked property to true.
      clickedPlayer[0].clicked = "true";
      console.log(clickedPlayer);
      //Use the setState method to update a component's state. 
      //Update the count - number of correct guesses/clicks without clicking an image twice.
      this.setState({ count: this.state.count + 1 });
      //Update the game message in the top navigation bar.
      this.setState({ Message: "Way to go! You haven't clicked that one yet. Keep clicking!" });
      console.log(this.state.count);
    }

    //if the player has already clicked the image once already, then...
    else if (clickedPlayer[0].clicked === "true") 
    {
      //Update the game message to tell the user that the player has already been clicked. Reset the game.
      this.setState({ Message: "You already clicked that player. Now you have to start over." });
      console.log(Message);
      //Update the count - number of correct clicks - back to 0 to reset the game.
      this.setState({ count: 0});
      //Update the top score.
      this.setState({ topScore: this.state.count + 1});
      //For every player, set the clicked value back to false.
      for (let i = 0; i < players.length; i++) {
        players[i].clicked = "false";
      }
      console.log(players);
    }

    //if user clicks all images without clicking on an image more than once (that is, count = 11), the user won.
    if (this.state.count === 11) {
      //Update the game message to tell the user that they won. Reset the game.
      this.setState({ Message: "You won! Bet you can't do it again." });
      //Update the count - number of correct clicks - back to 0 to reset the game.
      this.setState({ count: 0});
      //Update the top score.
      this.setState({ topScore: this.state.count});
      //For every player, set the clicked value back to false.
      for (let i = 0; i < players.length; i++) {
        players[i].clicked = "false";
      }
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

  //Render the app components.
  render() {
    return [
      //Top navigation bar component.
      //We are passing 3 props into the navbar component, count, topScore, and Message.
      <Navbar
        count={this.state.count}
        topScore ={this.state.topScore}
        Message={this.state.Message}  
      />,

      //Container component that holds all the clickable player images.
      <Container>

        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            {this.state.players.slice(0,3).map(player => (
              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}
                updatePlayerClickedValue = {this.updatePlayerClickedValue}          
              />
            ))}
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            {this.state.players.slice(3,6).map(player => (
              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}
                image={player.image}
                updatePlayerClickedValue = {this.updatePlayerClickedValue}                
              />
            ))}
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            {this.state.players.slice(6,9).map(player => (
              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}
                image={player.image}
                updatePlayerClickedValue = {this.updatePlayerClickedValue}                
              />
            ))}
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            {this.state.players.slice(9,12).map(player => (
              <PlayerCard
                id={player.id}
                key={player.id}
                name={player.name}
                image={player.image}
                image={player.image}
                updatePlayerClickedValue = {this.updatePlayerClickedValue}
              />
            ))}
          </div>
        </div>
      </Container>,

      //App Footer component.
      <Footer />,
    ];
  }
}

//Export App so that index.js can use it to render the components to the page.
export default App;
