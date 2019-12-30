import { applyMiddleware } from 'redux'

import audioMiddleware from 'lib/middlewares/audio'

import gameMiddleware from 'common/middlewares/game'


export default applyMiddleware(
  audioMiddleware,
  gameMiddleware,
)
