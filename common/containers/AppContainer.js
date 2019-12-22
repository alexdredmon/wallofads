import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import Body from 'lib/components/layout/Body'
import Text from 'lib/components/layout/Text'

import Header from 'common/components/Header'
import WallContainer from 'common/containers/WallContainer'
import middlewares from 'common/middlewares'
import reducers from 'common/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(middlewares)
)

class AppContainer extends React.Component {
  render = () => {
    return (
      <Body headerHeight={80}>
        <Header />
        <WallContainer />
      </Body>
    )
  }
}

export default AppContainer
