import './App.css';
import { Navbar } from "./Components/navbar/Navbar";
import { Footer } from "./Components/footer/Footer";
import { Container }  from "./Components/container/Container";
import { PlayerCard } from "./Components/player-card/PlayerCard";
import { useGameContext } from './hooks/useGameContext';
import { setClickedToTrue, updateLostGame, updateWonGame } from './reducers/actionCreators';
import { shufflePlayers } from './utils/shufflePlayers';

export const App = () => {
  const { players, message, score, topScore, dispatch } = useGameContext()

  const onClickPlayer = player => {
    if (player.clicked === 'false') {
      dispatch(setClickedToTrue(player))
    }

    if (player.clicked === 'true') {
      dispatch(updateLostGame(player))
    }

    if (score === players.length - 1) {
      dispatch(updateWonGame())
    }

    // Randomize - every time a player is clicked, shuffle players in random order.
    shufflePlayers(players)
  };

  return (
    <div>
      <Navbar
        message={message}  
        score={score}
        topScore={topScore}
      />
        <Container>
          <div className="row">
            {players.map(player => (
                <div className="col-md-3 col-sm-6 col-xs-12" key={player.id}>
                  <PlayerCard
                    player={player}
                    onClickPlayer={() => onClickPlayer(player)}                
                  />
              </div>
            ))}
          </div>
        </Container>
      <Footer />
    </div>
  )
};
