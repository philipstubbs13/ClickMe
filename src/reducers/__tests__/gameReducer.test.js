import { initialMessage, playerAlreadyClickedMessage, playerNotClickedMessage, youWonMessage } from "../../constants/messages"
import { gameReducer } from "../gameReducer"
import defaultPlayers from "../../players.json";
import { LOST_GAME, SET_CLICKED_TO_TRUE, WON_GAME } from "../../constants/actions";

describe('gameReducer', () => {
    const initialStateMock = {
        message: initialMessage,
        players: defaultPlayers,
        score: 0,
        topScore: 0
    }

    describe('when action.type is SET_CLICKED_TO_TRUE', () => {
        const clickedPlayerMock = {
            "id": 1,
            "name": "Tyus Jones",
            "image": "imageMock",
            "clicked": "false"
        }
        const actionMock = { type: SET_CLICKED_TO_TRUE, payload: clickedPlayerMock }

        test('should update player clicked value to true', () => {
            const result = gameReducer(initialStateMock, actionMock)
            const playerResult = result.players.find(player => player.id === clickedPlayerMock.id)

            expect(playerResult.clicked).toEqual('true')
        })

        test('should update message', () => {
            const result = gameReducer(initialStateMock, actionMock)

            expect(result.message).toEqual(playerNotClickedMessage)
        })
    })

    describe('when action.type is LOST_GAME', () => {
        const clickedPlayerMock = {
            "id": 1,
            "name": "Tyus Jones",
            "image": "imageMock",
            "clicked": "true"
        }
        const actionMock = { type: LOST_GAME, payload: clickedPlayerMock }

        test('should reset player clicked value back to false', () => {
            const result = gameReducer(initialStateMock, actionMock)
            const playerResult = result.players.find(player => player.id === clickedPlayerMock.id)

            expect(playerResult.clicked).toEqual('false')
        })

        test('should update message', () => {
            const result = gameReducer(initialStateMock, actionMock)

            expect(result.message).toEqual(playerAlreadyClickedMessage)
        })

        test('should reset score', () => {
            const result = gameReducer(initialStateMock, actionMock)

            expect(result.score).toEqual(0)
        })
    })

    describe('when action.type is WON_GAME', () => {
        const actionMock = { type: WON_GAME }

        test('should update message', () => {
            const result = gameReducer(initialStateMock, actionMock)

            expect(result.message).toEqual(youWonMessage)
        })

        test('should reset score', () => {
            const result = gameReducer(initialStateMock, actionMock)

            expect(result.score).toEqual(0)
        })
    })

    describe('when action.type is not valid action', () => {
        const actionMock = { type: 'INVALID_ACTION' }

        test('should return default state', () => {
            const result = gameReducer(initialStateMock, actionMock)

            expect(result).toEqual(initialStateMock)
        })
    })    
})
