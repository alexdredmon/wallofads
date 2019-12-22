import React from 'react'

import Text from 'components/layout/Text'
import View from 'components/layout/View'


class Header extends React.Component {
  render = () => {
    return (
      <View>
        <Text fontSize={40}>
          Wall of Ads
        </Text>
      </View>
    )
  }
}


export default Header
