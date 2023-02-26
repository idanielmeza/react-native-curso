import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { style } from '../theme/appTheme';
import { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any,any> {}

export const Pagina1Screen = ({navigation}: Props) => {

  // useEffect(()=>{
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Button
  //         title="Menu"
  //         onPress={() => navigation.toggleDrawer()}
  //       />
  //     )
  //   })
  // },[])

  return (
    <View style={style.globalMargin}>
        <Text style={style.title}>Pagina 1 Screen</Text>

        <Button
          title="Ir a página 2"
          onPress = { () =>  navigation.navigate('Pagina2Screen')}
        />

        <Text>Navegar con argumentos</Text>


        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={style.botonGrande}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Daniel'
            })}
          >
            <Text style={style.textoBotonGrande}>Matias</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...style.botonGrande,
              backgroundColor: '#5856D6',
            }}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Matias'
            })}
          >
            <Text style={style.textoBotonGrande}>Daniel</Text>
          </TouchableOpacity>
        </View>
        
        

    </View>
  )
}
