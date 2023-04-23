import React from 'react';
import {Text, View} from 'react-native';
import {gStyle} from '../style/style';


export default function Contacts() {
    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Контакты</Text>
        </View>
    )
}