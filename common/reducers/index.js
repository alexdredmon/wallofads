import { combineReducers } from 'redux'

import { apiReducer as api } from 'common/lib/core/reducers/api'
import dialog from 'common/lib/core/reducers/dialog'
import { flashReducer as flash } from 'common/lib/core/reducers/flash'


export default combineReducers({
  api,
  dialog,
  flash,
})
