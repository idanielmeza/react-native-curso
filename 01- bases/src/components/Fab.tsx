import React from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({title,onPress, position = 'br'}: Props) => {

    const ios = ()=>{
        return (
            <TouchableNativeFeedback 
                onPress={onPress}>
                <View style={[styles.fab, position === 'br' ? styles.right : styles.left]}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }

    const android = ()=>{
        return (
            <>
            <View
                 style={[ styles.fabLocation, position === 'br' ? styles.right : styles.left ]}
            >
                <TouchableNativeFeedback
                       background={ TouchableNativeFeedback.Ripple('#0c3d75', false, 30) }
                        onPress={onPress}
                    >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            
            </>
          )
    }

    return Platform.OS === 'ios' ? ios() : android()

}

const styles = StyleSheet.create({
    fabLocation:{
        position: 'absolute',
        bottom: 20,
    },
    right: {
        right: 20,
    },
    left: {
        left: 20,
    },

    fab:{
        backgroundColor: '#103a52',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    fabText:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }
})