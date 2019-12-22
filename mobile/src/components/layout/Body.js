import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, View } from 'react-native';


export const BodyMobile = props => (
  <View style={styles.body}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  body: {
    height: Math.round(Dimensions.get('window').height),
    padding: 10,
    paddingTop: 50,
  },
})

export default BodyMobile
