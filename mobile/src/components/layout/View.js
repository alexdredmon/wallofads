import React from 'react'
import { StyleSheet, View } from 'react-native';


export const ViewMobile = props => {
  const {
    children,
  } = props

  return (
    <View>
      { children }
    </View>
  )
}

export default ViewMobile
