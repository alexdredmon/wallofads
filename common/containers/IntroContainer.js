import React from 'react'

import AppStoreDownload from 'lib/components/layout/AppStoreDownload'
import FlexCell from 'lib/components/layout/FlexCell'
import FlexColumn from 'lib/components/layout/FlexColumn'
import Text from 'lib/components/layout/Text'
import View from 'lib/components/layout/View'


class IntroContainer extends React.Component {
  render = () => {
    const {
      handleStartGame
    } = this.props

    const style = {
      color: '#fff',
      fontFamily: 'Open Sans',
      fontSize: 20,
      textAlign: 'center',
    }

    return (
      <FlexColumn>
        <FlexCell>
          <View>
            <Text style={style}>
              You'll be presented with five ads, one of which is fake.
              Find as many fakes as you can in 30 seconds.
            </Text>
          </View>
          <View
            onClick={handleStartGame}
            style={{marginTop:  30}}
          >
            <Text style={{
              color: '#7dbf40',
              fontFamily: 'Open Sans Condensed',
              fontSize: 30,
            }}>
              START GAME
            </Text>
          </View>
          <View
            style={{
              marginTop:  30
            }}
          >
            <Text
              style={{
                ...style,
                color: '#34e2ff',
              }}
            >
              Concept by San Francisco artist Eric Dyer (eric-dyer.com)
            </Text>
          </View>
          <View>
            <AppStoreDownload
              style={{
                marginTop: 50
              }}
              url="https://apps.apple.com/us/app/wall-of-ads/id1492645705?ls=1"
            />
          </View>
        </FlexCell>
      </FlexColumn>
    )
  }
}

export default IntroContainer
