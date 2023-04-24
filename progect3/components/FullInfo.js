import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {gStyle} from '../style/style';


export default function FullInfo({route}) {
   /* const loadScene = () => {
        navigation.goBack();
    }*/
    return (
        <View style={gStyle.main}>
            <Image source={{
                width: '100%',
                height: 100,
                uri: route.params.img
            }}/>
            <Text style={[gStyle.title,styles.header]}>{route.params.name}</Text>
            <Text styles={styles.full}>{route.params.full}</Text>
           {/* <Button title="открыть страницу" onPress={loadScene}/>*/}
        </View>
    )
}
const styles = StyleSheet.create({
    full: {
        fontFamily: 'font-bold',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: '#f22121'
    },
    header: {
        fontSize: 25,
        marginTop: 25
    }
})