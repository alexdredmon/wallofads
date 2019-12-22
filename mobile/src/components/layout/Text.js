import React from 'react'
import { StyleSheet, Text } from 'react-native'


export const TextMobile = props => {
  const {
    children,
    fontSize=16
  } = props

  return (
    <Text style={{
      fontSize: fontSize
    }}>
      { children }
    </Text>
  )
}

const styles = StyleSheet.create({
  body: {
    padding: 10,
    paddingTop: 50,
  },
})


export default TextMobile
