import React from 'react'
import { Text, View } from 'react-native';
import { style } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect} from 'react';
import { RootStackParams } from '../navigation/StackNavigator';

// interface RouteParams {
//     id: number;
//     nombre: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {

    // const params = route.params as RouteParams;
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    },[])

    return (
        <View>
            <Text style={style.title}>
                {JSON.stringify(params, null, 3)}
            </Text>
        </View>
    )
}
