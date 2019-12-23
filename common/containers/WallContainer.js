import React from 'react'

import { randomInteger, shuffleArray } from 'common/lib/core/util/random'

import FlexColumn from 'lib/components/layout/FlexColumn'

import Ad from 'common/components/Ad'

import ADS from 'common/data/ads'


class WallContainer extends React.Component {
  state = {
    ads: undefined
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

    return (
      <FlexColumn>
        {ads && ads.map((ad, index) => (
          <Ad
            ad={ad}
            handleDealAds={this.handleDealAds}
            key={`${index}-${ad.copy}`}
          />
        ))}
      </FlexColumn>
    )
  }
}

export default WallContainer
