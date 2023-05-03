import React, {useState} from 'react';
import {Text, TouchableOpacity, FlatList, View, Image, StyleSheet, Modal} from 'react-native';
import {gStyle} from '../style/style';
import { Ionicons } from '@expo/vector-icons';
import Form from "./Form";

export default function Main({navigation}) {

    const [news, setNews] = useState([
        { name: 'Google', anons: 'Googleeee', full: 'G is cool!', key: 1, img:  require('../assets/pictures/1.png')},
        { name: 'Apple', anons: 'Appleeeee', full: 'Apple is cool!', key: 2, img: require('../assets/pictures/2.png')},
        { name: 'Fle', anons: 'Fleeee', full: 'F is cool!', key: 3, img: require('../assets/pictures/3.png')}
    ])
    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        });
        setModalWindow(false);
    }
        return (
            <View style={gStyle.main}>
                <Modal visible={modalWindow}>
                    <View style={gStyle.main}>
                        <Ionicons name="close-circle" size={24}  style={styles.iconClose} onPress={() => setmodalWindow(false)}/>
                        <Text style={styles.title}>Форма добавления</Text>
                        <Form addArticle={addArticle}/>
                    </View>
                </Modal>
                <Ionicons name="add-circle-sharp" size={34} style={styles.iconAdd} onPress={() => setModalWindow(true)}/>
                <Text style={[gStyle.title, styles.header]}>Главная</Text>
                <FlatList data={news} renderItem={({item}) => (
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                    <Image style={styles.image} source={{ uri: item.img}}/>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.anons}>{item.anons}</Text>
                    </TouchableOpacity>
                    )} />
            </View>
        )
    }
const styles = StyleSheet.create({
    iconAdd: {
        textAlign: 'center',
        marginBottom: 15,
        color:"green"
    },
    iconClose: {
        textAlign: 'center',
        color:"red"
    },
    image: {
        width: '100%',
        height: 100,
    },
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



