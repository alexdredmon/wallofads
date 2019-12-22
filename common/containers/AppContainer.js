import React from 'react'

import Body from 'lib/components/layout/Body'
import Text from 'lib/components/layout/Text'

import Header from 'common/components/Header'
import WallContainer from 'common/containers/WallContainer'


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
