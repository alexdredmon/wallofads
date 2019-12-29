import React from 'react'
import { connect } from 'react-redux'

import { getIn } from 'common/lib/core/util/iterable'
import { randomInteger, shuffleArray } from 'common/lib/core/util/random'

import FlexCell from 'lib/components/layout/FlexCell'
import FlexColumn from 'lib/components/layout/FlexColumn'
import Text from 'lib/components/layout/Text'
import View from 'lib/components/layout/View'

import { tick } from 'common/actions/game'
import Ad from 'common/components/Ad'

import ADS from 'common/data/ads'


class WallContainer extends React.Component {
  state = {
    ads: undefined,
  }

  fake_ads = 1
  total_ads = 5

  componentDidMount = () => {
    this.handleDealAds()
  }

  handleDealAds = () => {
    let ads = []
    for (let i=0; i<this.total_ads - this.fake_ads; i++) {
      ads.push({
        copy: ADS.real[randomInteger(ADS.real.length)],
        fake: false,
      })
    }
    for (let i=0; i<this.fake_ads; i++) {
      ads.push({
        copy: ADS.fake[randomInteger(ADS.fake.length)],
        fake: true,
      })
    }

    this.setState({
      ads: shuffleArray(ads)
    })
  }

  render = () => {
    const {
      ads,
    } = this.state
    const {
      handleResetGame,
      time,
    } = this.props

    return (
      <FlexColumn>
        {time > 0 && ads && ads.map((ad, index) => (
          <Ad
            ad={ad}
            handleDealAds={this.handleDealAds}
            key={`${index}-${ad.copy}`}
          />
        ))}
        {! time &&
          <FlexCell>
            <Text
              style={{
                color: '#ff3737',
                fontFamily: 'Open Sans Condensed',
                fontSize: 36,
                fontWeight: 'bold',
              }}
            >
              GAME OVER
            </Text>
            <View
              onClick={handleResetGame}
              style={{
                cursor: 'pointer',
                marginTop: 25,
              }}
            >
              <Text
                style={{
                  color: '#7dbf40',
                  fontFamily: 'Open Sans Condensed',
                  fontSize: 26,
                  fontWeight: 'bold',
                }}
              >
                PLAY AGAIN
              </Text>
            </View>
          </FlexCell>
        }
      </FlexColumn>
    )
  }
}

export default connect(
  (state, props) => ({
    time: getIn(state, 'game.time'),
  }),
  (dispatch, props) => ({
    tick: () => dispatch(tick()),
  }),
)(WallContainer)
