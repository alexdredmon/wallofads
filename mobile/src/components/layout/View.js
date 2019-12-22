import React from 'react'
import { StyleSheet, View } from 'react-native';


export const ViewMobile = props => {
  const {
    children,
    ...rest
  } = props

  return (
    <View {...rest}>
      { children }
    </View>
  )
}

export default ViewMobile
