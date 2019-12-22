import React from 'react'
import { StyleSheet } from 'react-native'

import View from 'components/layout/View'


export const FlexColumnMobile = props => (
  <View style={{
    ...styles.body,
  }}>
    {props.children}
  </View>
)


const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
})

export default FlexColumnMobile
