import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { style } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/core'

export const Pagina2Screen = () => {

  const navigator = useNavigation();

  useEffect(()=>{
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: '' //solo funciona en IOS si es un string vacio muestra back en el idioma del celular
    })
  },[])

  return (
    <View style={style.globalMargin}>
        <Text style={style.title}>Pagina 2 Screen</Text>

      <Button
        title="Ir a página 3"
        onPress = { () =>  navigator.navigate('Pagina3Screen' as never)}
      /> 

    </View>
  )
}
