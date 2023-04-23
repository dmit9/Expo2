import React from 'react';
import {Button, Text, View} from 'react-native';
import {gStyle} from '../style/style';


export default function FullInfo({route}) {
   /* const loadScene = () => {
        navigation.goBack();
    }*/
    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>{route.params.name}</Text>
            <Text >{route.params.full}</Text>
           {/* <Button title="открыть страницу" onPress={loadScene}/>*/}
        </View>
    )
}