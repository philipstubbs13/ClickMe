import { playerNotClickedMessage, playerAlreadyClickedMessage, youWonMessage } from '../constants/messages';
import { LOST_GAME, SET_CLICKED_TO_TRUE, WON_GAME } from "../constants/actions";

export const gameReducer = (state, action) => {
    switch (action.type) {
        case SET_CLICKED_TO_TRUE:            
            const updatedPlayers = state.players.reduce((sum, currentPlayer) => {
                if (currentPlayer.id === action.payload.id) {
                    return [...sum, { ...currentPlayer, clicked: 'true' }]
                }

                return [...sum, currentPlayer]
              }, []);

            return {
                ...state,
                message: playerNotClickedMessage,
                score: state.score + 1,
                players: updatedPlayers,
            }
        case LOST_GAME:
            const playersResetAfterLosing = state.players.reduce((sum, currentPlayer) => {
                return [...sum, { ...currentPlayer, clicked: 'false' }]
              }, []);
            const isHighScore = state.score > state.topScore

        
            return {
                ...state,
                message: playerAlreadyClickedMessage,
                score: 0,
                players: playersResetAfterLosing,
                topScore: isHighScore ? state.score : state.topScore
            }
        case WON_GAME:
            const playersResetAfterWinning = state.players.reduce((sum, currentPlayer) => {
                return [...sum, { ...currentPlayer, clicked: 'false' }]
              }, []);

            return {
                ...state,
                message: youWonMessage,
                players: playersResetAfterWinning,
                score: 0,
                topScore: state.score,
            }
        default: 
            return state
    }
}