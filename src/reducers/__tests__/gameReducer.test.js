import { initialMessage, playerAlreadyClickedMessage, playerNotClickedMessage, youWonMessage } from "../../constants/messages"
import { gameReducer } from "../gameReducer"
import defaultPlayers from "../../players.json";
import { setClickedToTrue, updateLostGame, updateWonGame } from "../actionCreators";

describe('gameReducer', () => {
    const initialStateMock = {
        message: initialMessage,
        players: defaultPlayers,
        score: 0,
        topScore: 0
    }

    describe('when player is clicked for first time', () => {
        const clickedPlayerMock = {
            "id": 1,
            "name": "Tyus Jones",
            "image": "imageMock",
            "clicked": "false"
        }
        const actionMock = setClickedToTrue(clickedPlayerMock)

        test('should update player clicked value to true', () => {
            const result = gameReducer(initialStateMock, actionMock)
            const playerResult = result.players.find(player => player.id === clickedPlayerMock.id)

            expect(playerResult.clicked).toEqual('true')
        })

        test('should update #message', () => {
            const result = gameReducer(initialStateMock, actionMock)

            expect(result.message).toEqual(playerNotClickedMessage)
        })
    })

    describe('when player is clicked more than once', () => {
        const clickedPlayerMock = {
            "id": 1,
            "name": "Tyus Jones",
            "image": "imageMock",
            "clicked": "true"
        }
        const actionMock = updateLostGame(clickedPlayerMock)

        test('should reset player clicked value back to false', () => {
            const result = gameReducer(initialStateMock, actionMock)
            const playerResult = result.players.find(player => player.id === clickedPlayerMock.id)

            expect(playerResult.clicked).toEqual('false')
        })

        test('should update #message', () => {
            const result = gameReducer(initialStateMock, actionMock)

            expect(result.message).toEqual(playerAlreadyClickedMessage)
        })

        test('should reset #score', () => {
            const result = gameReducer(initialStateMock, actionMock)

            expect(result.score).toEqual(0)
        })

        describe('when #score is greater than #topScore', () => {
            test('should update #topScore', () => {
                const result = gameReducer({...initialStateMock, score: 3}, actionMock)
    
                expect(result.topScore).toEqual(3)
            })
        })

        describe('when #score is not greater than #topScore', () => {
            test('should not update #topScore', () => {
                const result = gameReducer({...initialStateMock, score: 3, topScore: 5}, actionMock)
    
                expect(result.topScore).toEqual(5)
            })
        })
    })

    describe('when game is won', () => {
        const actionMock = updateWonGame()

        test('should update #message', () => {
            const result = gameReducer(initialStateMock, actionMock)

            expect(result.message).toEqual(youWonMessage)
        })

        test('should reset #score', () => {
            const result = gameReducer(initialStateMock, actionMock)

            expect(result.score).toEqual(0)
        })

        test('should update #topScore', () => {
            const result = gameReducer({...initialStateMock, score: 11}, actionMock)

            expect(result.topScore).toEqual(11)
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
