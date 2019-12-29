import React from 'react'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import { getIn } from 'common/lib/core/util/iterable'
import If from 'common/lib/components/If'

import Body from 'lib/components/layout/Body'

import {
  resetGame,
  startGame,
} from 'common/actions/game'

import Header from 'common/components/Header'
import IntroContainer from 'common/containers/IntroContainer'
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
    const {
      playing,
      resetGame,
      startGame,
    } = this.props

    return (
      <Body
        headerHeight={135}
        style={{
          backgroundColor: '#171717',
        }}
      >
        <Header />
        <If condition={! playing}>
          <IntroContainer
            handleStartGame={startGame}
          />
        </If>
        <If condition={playing}>
          <WallContainer
            handleResetGame={resetGame}
          />
        </If>
      </Body>
    )
  }
}

const ConnectedAppContainer = connect(
  (state, props) => ({
    playing: getIn(state, 'game.playing'),
  }),
  (dispatch, props) => ({
    resetGame: () => dispatch(resetGame()),
    startGame: () => dispatch(startGame()),
  }),
)(AppContainer)

export const WrappedAppContainer = props => (
  <Provider store={store}>
    <ConnectedAppContainer {...props} />
  </Provider>
)

export default WrappedAppContainer
