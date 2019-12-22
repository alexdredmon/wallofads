import React from 'react'
import { StyleSheet, View } from 'react-native';


export const MobileView = props => {
  const {
    children,
  } = props

  return (
    <View>
      { children }
    </View>
  )
}

export default MobileView
