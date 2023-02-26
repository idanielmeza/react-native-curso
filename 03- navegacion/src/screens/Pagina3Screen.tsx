import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { style } from '../theme/appTheme'

interface Props extends StackScreenProps<any,any> {}

export const Pagina3Screen = ({navigation}: Props) => {

  return (
    <View style={style.globalMargin}>
        <Text style={style.title}>Pagina 3 Screen</Text>

        <Button
          title="Regresar"
          onPress = { () =>  navigation.pop()}
        />

        <Button
          title="Ir a página 1"
          onPress = { () =>  navigation.popToTop()}
        />

    </View>
  )
}
