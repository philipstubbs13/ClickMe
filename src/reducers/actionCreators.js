import { LOST_GAME, SET_CLICKED_TO_TRUE, WON_GAME } from "../constants/actions"

export const setClickedToTrue = (player) => {
    return { type: SET_CLICKED_TO_TRUE, payload: player }
}

export const updateLostGame = (player) => {
    return { type: LOST_GAME, payload: player }
}

export const updateWonGame = () => {
    return { type: WON_GAME }
}