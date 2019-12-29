import { randomInteger } from 'common/lib/core/util/random'
import {
  CORRECT_GUESS,
  INCORRECT_GUESS,
  RESET_GAME,
  START_GAME,
  TICK,
} from 'common/actions/game'


const initialState = {
  lastGoodGuess: Date.now(),
  playing: false,
  score: 0,
  time: 30,
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

  if (action.type === INCORRECT_GUESS) {
    const points = randomInteger(10000)
    const score = state.score - points > 0 ? state.score - points : 0
    return {
      ...state,
      score,
    }
  }

  if (action.type === RESET_GAME) {
    return {
      ...state,
      lastGoodGuess: Date.now(),
      playing: false,
      score: 0,
      time: initialState.time,
    }
  }

  if (action.type === START_GAME) {
    return {
      ...state,
      lastGoodGuess: Date.now(),
      playing: true,
    }
  }

  if (action.type === TICK) {
    const time = state.time > 0 ? state.time - 1 : state.time
    return {
      ...state,
      time
    }
  }

  return state
}

export default gameReducer
