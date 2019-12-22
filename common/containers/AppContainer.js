import React from 'react'

import Header from 'common/components/Header'
import WallContainer from 'common/containers/WallContainer'

import Body from 'components/layout/Body'
import Text from 'components/layout/Text'


class AppContainer extends React.Component {
  render = () => {
    return (
      <Body>
        <Header />
        <WallContainer />
      </Body>
    )
  }
}

export default AppContainer
