import React from 'react'
import { StyleSheet } from 'react-native'

import View from 'components/layout/View'


export const FlexCellMobile = props => (
  <View style={styles.body}>
    {props.children}
  </View>
)

styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
  },
})

export default FlexCellMobile
