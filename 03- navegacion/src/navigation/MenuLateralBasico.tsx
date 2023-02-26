import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MyStack } from './StackNavigator';
import { SettingsScren } from '../screens/SettingsScren';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico= ()=> {

  const {width}  = useWindowDimensions();

  return (
    <Drawer.Navigator
        screenOptions={{
            drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
            headerShown: false  // Oculta la hamburguesa
        }}
    >
      <Drawer.Screen name="StackNavigator" options={{title: 'Home'}}  component={MyStack} />
      <Drawer.Screen name="Article" options={{title: 'Setting'}}  component={SettingsScren} />
    </Drawer.Navigator>
  );
}