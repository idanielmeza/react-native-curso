import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (
        <View style={{
          flex: 1,
          // backgroundColor: 'red',
          justifyContent: 'center',
        }}>
          <Text style={{
            fontSize: 30,
            textAlign: 'center',
            color: 'black'
          }}>Hello World</Text>
        </View>
      )
}
