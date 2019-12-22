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
              Wall of Ads is a game where you're presented with a series of ads
              and determine which are fake.
            </Text>
          </View>
          <View style={{marginTop:  10}}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              Tap anywhere to  begin, then tap on the ad(s) you think are aren't real.
            </Text>
          </View>
          <View style={{marginTop:  10}}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              Envisioned by San Francisco artist Eric Dyer (https://eric-dyer.com)
            </Text>
          </View>
        </FlexCell>
      </FlexColumn>
    )
  }
}

export default IntroContainer
