import {
  playSound,
} from 'common/lib/core/actions/audio'
import {
  CORRECT_GUESS,
  INCORRECT_GUESS,
  START_BACKGROUND_AUDIO,
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

    if (action.type === START_BACKGROUND_AUDIO) {
      const {
        isBackgroundAudioPlaying
      } = state.game
      if (! isBackgroundAudioPlaying) {
        store.dispatch(playSound(
          require('common/assets/audio/background.mp3'),
          'audio/background.mp3',
          true,
          .9,
        ))
      }
    }

    if (action.type === START_GAME) {
      store.dispatch(tick())
    }

    if (action.type === CORRECT_GUESS) {
      store.dispatch(playSound(
        require('common/assets/audio/good.m4a'),
        'audio/good.m4a',
        false,
        .05,
      ))
    }

    if (action.type === INCORRECT_GUESS) {
      store.dispatch(playSound(
        require('common/assets/audio/bad.m4a'),
        'audio/bad.m4a',
        false,
        .9,
      ))
    }

  }
  return next(action)
}
export default gameMiddleware
