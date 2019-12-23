export const CORRECT_GUESS = 'game/CORRECT_GUESS'
export const INCORRECT_GUESS = 'game/INCORRECT_GUESS'
export const RESET_GAME = 'game/RESET_GAME'


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
