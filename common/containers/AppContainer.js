import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import If from 'common/lib/components/If'

import Body from 'lib/components/layout/Body'

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
  state = {
    playing: false,
  }

  handleResetGame = () => {
    this.setState({
      playing: false,
    })
  }

  handleStartGame = () => {
    this.setState({
      playing: true,
    })
  }

  render = () => {
    const {
      playing,
    } = this.state

    return (
      <Provider store={store}>
        <Body headerHeight={80}>
          <Header onClick={this.handleResetGame} />
          <If condition={! playing}>
            <IntroContainer
              handleStartGame={this.handleStartGame}
            />
          </If>
          <If condition={playing}>
            <WallContainer />
          </If>
        </Body>
      </Provider>
    )
  }
}

export default AppContainer
