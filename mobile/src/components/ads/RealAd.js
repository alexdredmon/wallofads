import React from 'react'
import { AdMobBanner } from 'expo-ads-admob'

import View from 'components/layout/View'

class RealAd extends React.Component {
  render = () => {
    return (
      <View>
        <AdMobBanner
          // style={styles.bottomBanner}
          bannerSize="banner"
          adUnitID="ca-app-pub-1877616546617176~2742058070"
          // adUnitID="ca-app-pub-1877616546617176/3803858306"
          // Test ID, Replace with your-admob-unit-id
          // testDeviceID="EMULATOR"
          // didFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    )
  }
}

export default RealAd
