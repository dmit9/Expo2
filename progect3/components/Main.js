import React, {useState} from 'react';
import {Text, TouchableOpacity, FlatList, View} from 'react-native';
import {gStyle} from '../style/style';


export default function Main({navigation}) {
    const loadScene = () => {
        navigation.navigate('Contacts')
    }
    const [news, setNews] = useState([
        { name: 'Google', anons: 'Googleeee', full: 'G is cool!'},
        { name: 'Apple', anons: 'Appleeeee', full: 'Apple is cool!'},
        { name: 'Fle', anons: 'Fleeee', full: 'F is cool!'}
    ])
        return (
            <View style={gStyle.main}>
                <Text style={gStyle.title}>Главная</Text>
                {/*<Button title="открыть страницу" onPress={loadScene}/>*/}
                <FlatList data={news} renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
                    <Text>{item.name}</Text>
                    <Text>{item.anons}</Text>
                    </TouchableOpacity>
                    )} />
            </View>
        )
    }




