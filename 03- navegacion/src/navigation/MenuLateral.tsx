import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MyStack } from './StackNavigator';
import { SettingsScren } from '../screens/SettingsScren';
import { Text, useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateral= ()=> {

  const {width}  = useWindowDimensions();

  return (
    <Drawer.Navigator
        screenOptions={{
            drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
            headerShown: false  // Oculta la hamburguesa
        }}
      drawerContent={ props => <MenuInterno/>}
    >
      <Drawer.Screen name="StackNavigator" component={MyStack} />
      <Drawer.Screen name="Article" component={SettingsScren} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ()=>{
  return <Text>Hola Mundo</Text>
}