import React from 'react'
import { StyleSheet, View } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaAzul}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#28C4B9',
        flex: 1,
        // justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaMorada:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        // alignSelf: 'flex-end'
        // flex: 1
        // left: 100,
        // top: 100
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // alignSelf: 'center'
        // flex: 2
        // left: 100
        top: 50
    },
    cajaAzul:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'flex-start'
        // flex: 3
    },
})
