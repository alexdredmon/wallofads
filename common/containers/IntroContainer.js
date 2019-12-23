import React from 'react'

import FlexCell from 'lib/components/layout/FlexCell'
import FlexColumn from 'lib/components/layout/FlexColumn'
import Text from 'lib/components/layout/Text'
import View from 'lib/components/layout/View'


class IntroContainer extends React.Component {
  render = () => {
    const {
      handleStartGame
    } = this.props

    return (
      <FlexColumn onClick={handleStartGame}>
        <FlexCell>
          <View>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              This is a game where you're presented with a series of ads
              and find the fakes.
            </Text>
          </View>
          <View style={{marginTop:  30}}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              Tap to begin, then tap the fake ads.
            </Text>
          </View>
          <View style={{marginTop:  30}}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              Concept by San Francisco artist Eric Dyer (eric-dyer.com)
            </Text>
          </View>
        </FlexCell>
      </FlexColumn>
    )
  }
}

export default IntroContainer
