import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaVerde}/>

        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#28C4D9',
        flex: 1,
        // width: 300,
        // height: 300,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    cajaMorada:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cajaVerde:{
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // top: 0,
        // right: 0,
        // bottom: 0,
        // left: 0,
        ...StyleSheet.absoluteFillObject
    }
})