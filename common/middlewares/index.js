import { applyMiddleware } from 'redux'

import apiMiddleware from 'common/lib/core/middlewares/api'
import gameMiddleware from 'common/middlewares/game'


export default applyMiddleware(
  apiMiddleware,
  gameMiddleware,
)
