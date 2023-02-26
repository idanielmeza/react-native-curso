import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { style } from '../theme/appTheme'
import { BotonCalc } from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora';



export const CalculadoraScreen = () => {

    const {numero,
        numeroAnterior,
        limpiar,
        positivoNegativo,
        deleteLastNumber,
        armarNumero,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular} = useCalculadora();

    return (
        <View style={style.calculadoraContainer}>

            {
                (numeroAnterior !== '0') &&
                <Text style={style.resultadoTiny}>{numeroAnterior}</Text>
            }

            
            <Text 
                style={style.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{numero}</Text>

            <View style={style.fila}>            
                <BotonCalc texto="C" color="#9B9B9B" action={limpiar}/>
                <BotonCalc texto="+/-" color="#9B9B9B" action={positivoNegativo}/>
                <BotonCalc texto="DEL" color="#9B9B9B" action={deleteLastNumber}/>
                <BotonCalc texto="/" color="#ff9427" action={btnDividir}/>
            </View>

            <View style={style.fila}>            
                <BotonCalc texto="7" action={armarNumero}/>
                <BotonCalc texto="8" action={armarNumero}/>
                <BotonCalc texto="9" action={armarNumero}/>
                <BotonCalc texto="X" color="#ff9427" action={btnMultiplicar}/>
            </View>
            <View style={style.fila}>            
                <BotonCalc texto="4" action={armarNumero}/>
                <BotonCalc texto="5" action={armarNumero}/>
                <BotonCalc texto="6" action={armarNumero}/>
                <BotonCalc texto="-" color="#ff9427" action={btnRestar}/>
            </View>
            <View style={style.fila}>            
                <BotonCalc texto="1" action={armarNumero}/>
                <BotonCalc texto="2" action={armarNumero}/>
                <BotonCalc texto="3" action={armarNumero}/>
                <BotonCalc texto="+" color="#ff9427" action={btnSumar}/>
            </View>
            <View style={style.fila}>            
                <BotonCalc texto="0" ancho action={armarNumero}/>
                <BotonCalc texto="." action={armarNumero}/>
                <BotonCalc texto="=" color="#ff9427" action={calcular}/>
            </View>

        </View>
  )
}
