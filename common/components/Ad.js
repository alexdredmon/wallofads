import React from 'react'

import Text from  'lib/components/layout/Text'
import View from  'lib/components/layout/View'

class Ad extends React.Component {
  handleSelectAd = () => {
    const {
      ad: {
        fake
      },
      handleDealAds,
    } = this.props

    if (fake) {
      alert('Good job!  This was a fake ad.')
      handleDealAds()
    } else {
      alert('Nice try, but that is a real ad!')
    }
  }
  
  render = () => {
    const {
      ad: {
        copy,
      },
    } = this.props

    return (
      <View onClick={this.handleSelectAd}>
        <Text
          style={{
            cursor: 'pointer',
            color: "#0000ff",
            textDecoration: "underline",
          }}
        >
          {copy}
        </Text>
      </View>
    )
  }
}

export default Ad
