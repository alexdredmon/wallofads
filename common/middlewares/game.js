import {
  RESET_GAME,
  startGame,
  START_GAME,
  TICK,
  tick,
} from 'common/actions/game'

const gameMiddleware = store => next => action => {
  if (action) {
    const state = store.getState()
    if (action.type === TICK && state.game.time > 1) {
      setTimeout(() => store.dispatch(tick()), 1000)
    }
    if (action.type === START_GAME) {
      store.dispatch(tick())
    }
  }
  return next(action)
}
export default gameMiddleware
