import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectSrceen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'red',
  },
  title:{
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 20,
    // width: 150,
    borderWidth: 10,
    borderColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
  }
})