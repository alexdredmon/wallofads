import { applyMiddleware } from 'redux'

import apiMiddleware from 'common/lib/core/middlewares/api'


export default applyMiddleware(
  apiMiddleware,
)
