import { createContext, useReducer } from "react";
import defaultPlayers from "../players.json";
import { initialMessage } from '../constants/messages';
import { gameReducer } from "../reducers/gameReducer";

export const GameContext = createContext()

export const GameContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, {
        message: initialMessage,
        players: defaultPlayers,
        score: 0,
        topScore: 0
    })

    return (
        <GameContext.Provider value={{...state, dispatch}}>
            {children}
        </GameContext.Provider>
    )
}