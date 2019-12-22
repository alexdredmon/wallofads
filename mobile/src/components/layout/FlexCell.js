import React from 'react'
import { StyleSheet } from 'react-native'

import View from 'components/layout/View'


export const FlexCellMobile = props => (
  <View style={styles.body}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
})

export default FlexCellMobile
