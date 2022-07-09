import { LOST_GAME, SET_CLICKED, WON_GAME } from "../constants/actions"

export const setClicked = (player) => {
    return { type: SET_CLICKED, payload: player }
}

export const updateLostGame = (player) => {
    return { type: LOST_GAME, payload: player }
}

export const updateWonGame = () => {
    return { type: WON_GAME }
}