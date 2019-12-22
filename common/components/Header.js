import React from 'react'

import Text from 'components/layout/Text'
import View from 'components/layout/View'


class Header extends React.Component {
  render = () => {
    return (
      <View>
        <View>
          <Text fontSize={40}>
            Wall of Ads
          </Text>
        </View>
        <View>
          <Text fontSize={20}>
            Can you spot the fake below?
          </Text>
        </View>
      </View>
    )
  }
}


export default Header
