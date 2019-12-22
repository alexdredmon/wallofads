import React from 'react'

import { randomInteger, shuffleArray } from 'common/lib/core/util/random'

import FlexCell from 'lib/components/layout/FlexCell'
import FlexColumn from 'lib/components/layout/FlexColumn'

import Ad from 'common/components/Ad'

import ADS from 'common/data/ads'

class WallContainer extends React.Component {
  state = {
    ads: undefined
  }

  componentDidMount = () => {
    this.handleDealAds()
  }

  handleDealAds = () => {
    const ad1 = randomInteger(ADS.fake.length)
    const ad2 = randomInteger(ADS.real.length)
    const ad3 = randomInteger(ADS.real.length)
    const ad4 = randomInteger(ADS.real.length)

    const ads = [
      {
        copy: ADS.fake[ad1],
        fake: true,
      },
      {
        copy: ADS.real[ad2],
        fake: false,
      },
      {
        copy: ADS.real[ad3],
        fake: false,
      },
      {
        copy: ADS.real[ad4],
        fake: false,
      },
    ]
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
          <FlexCell
            alignItems="flex-start"
            key={index}
          >
            <Ad ad={ad} handleDealAds={this.handleDealAds} />
          </FlexCell>
        ))}
      </FlexColumn>
    )
  }
}

export default WallContainer
