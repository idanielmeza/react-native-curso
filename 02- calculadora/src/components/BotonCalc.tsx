import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { style } from '../theme/appTheme';

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    action: ( numeroTexto: string ) => void;
}

export const BotonCalc = ({texto, color = '#2D2D2D', ancho = false, action}: Props) => {
  return (
    <TouchableOpacity
        activeOpacity={0.6}
        onPress={()=> action(texto)}
    >
        <View 
            style={{
                ...style.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }}
        >
            <Text 
                style={ color && color === '#9B9B9B' ? {...style.botonTexto, color: 'black'} : style.botonTexto}
            >{texto}</Text>
        </View>
    </TouchableOpacity>
  )
}
