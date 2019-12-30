export const START_BACKGROUND_AUDIO = 'game/START_BACKGROUND_AUDIO'
export const CORRECT_GUESS = 'game/CORRECT_GUESS'
export const INCORRECT_GUESS = 'game/INCORRECT_GUESS'
export const RESET_GAME = 'game/RESET_GAME'
export const START_GAME = 'game/START_GAME'
export const TICK = 'game/TICK'


export const startBackgroundAudio =  () => ({
  type: START_BACKGROUND_AUDIO,
})

export const correctGuess = ad => ({
  type: CORRECT_GUESS,
  ad,
})

export const incorrectGuess = ad => ({
  type: INCORRECT_GUESS,
  ad,
})

export const resetGame = () => ({
  type: RESET_GAME,
})

export const startGame = () => ({
  type: START_GAME,
})

export const tick = () => ({
  type: TICK,
})
