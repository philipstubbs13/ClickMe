import './App.css';
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Container }  from "./components/container/Container";
import { PlayerCard } from "./components/player-card/PlayerCard";
import { useGameContext } from './hooks/useGameContext';

export const App = () => {
  const { players, message, score, topScore, dispatch } = useGameContext()

  const onClickPlayer = player => {
    if (player.clicked === 'false') {
      dispatch({ type: 'SET_CLICKED_TO_TRUE', payload: player })
    }

    if (player.clicked === 'true') {
      dispatch({ type: 'LOST_GAME', payload: player })
    }

    if (score === 11) {
      dispatch({ type: 'WON_GAME' })
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
