import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { MyStack } from './src/navigation/StackNavigator';
import { MenuLateralBasico } from './src/navigation/MenuLateralBasico';
import { MenuLateral } from './src/navigation/MenuLateral';

const App = () => {
  return (
    <NavigationContainer>
      {/* <MyStack/> */}
      {/* <MenuLateralBasico/> */}
      <MenuLateral/>
    </NavigationContainer>
  )
}

export default App;