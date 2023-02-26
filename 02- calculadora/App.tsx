import React from 'react'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { SafeAreaView, StatusBar } from 'react-native';
import { style } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={style.fondo}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <CalculadoraScreen/>
    </SafeAreaView>
  )
}

export default App;