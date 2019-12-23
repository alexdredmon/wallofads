import { randomInteger } from 'common/lib/core/util/random'
import {
  CORRECT_GUESS,
  RESET_GAME,
} from 'common/actions/game'


const initialState = {
  lastGoodGuess: Date.now(),
  score: 0,
}

const gameReducer = (state=initialState, action) => {
  if (action.type === CORRECT_GUESS) {
    const points = 10000 - (Date.now() - state.lastGoodGuess)
    const score = points > 0 ? state.score + points : state.score + randomInteger(13)
    return {
      ...state,
      lastGoodGuess: Date.now(),
      score,
    }
  }

  if (action.type === RESET_GAME) {
    return {
      ...state,
      lastGoodGuess: Date.now(),
      score: 0,
    }
  }

  return state
}

export default gameReducer
