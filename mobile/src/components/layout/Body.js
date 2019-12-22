import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Body = props => (
  <View style={styles.body}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  body: {
    padding: 10,
    paddingTop: 50,
  },
})

export default Body
