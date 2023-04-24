import React, {useState} from 'react';
import {Text, TouchableOpacity, FlatList, View, Image, StyleSheet} from 'react-native';
import {gStyle} from '../style/style';

const Image1 =  '../assets/pictures/1.png';
const Image2 = '../assets/pictures/2.png';
const Image3 =  '../assets/pictures/3.png';

export default function Main({navigation}) {
    const loadScene = () => {
        navigation.navigate('Contacts')
    }
    const [news, setNews] = useState([
        { name: 'Google', anons: 'Googleeee', full: 'G is cool!', key: 1, img:  require('../assets/pictures/1.png')},
        { name: 'Apple', anons: 'Appleeeee', full: 'Apple is cool!', key: 2, img: require('../assets/pictures/2.png')},
        { name: 'Fle', anons: 'Fleeee', full: 'F is cool!', key: 3, img: require('../assets/pictures/3.png')}
    ])
        return (
            <View style={gStyle.main}>
                <Text style={[gStyle.title, styles.header]}>Главная</Text>
                {/*<Button title="открыть страницу" onPress={loadScene}/>*/}
                <FlatList data={news} renderItem={({item}) => (
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                        <Image source={{
                            width: '100%',
                            height: 100,
                            uri: item.img
                        }}/>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.anons}>{item.anons}</Text>
                    </TouchableOpacity>
                    )} />
            </View>
        )
    }
const styles = StyleSheet.create({
    header: {
      marginBottom: 30
    },
    item: {
        width: '100%',
        marginBottom: 30
    },
    title: {
        fontFamily: 'font-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'
    },
    anons: {
        fontFamily: 'font-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#474747'
    }
})



