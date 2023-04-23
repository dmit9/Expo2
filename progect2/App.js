import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from "./components/Header";
import {useState} from "react";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Купить молоко', key: '1'},
    {text: 'Купить яйца', key: '2'},
    {text: 'Купить хлеб', key: '3'},
    {text: 'Купить лука', key: '4'},
      {text: 'Купить капусты 2шт', key: '5'},
  ])
  const  addHandler = (text) => {
      setListOfItems((list) => {
          return [
              {text: text, key: Math.random().toString(36).substring(7)},
              ...list
          ]
      })
  }
  const deleteHandler = (key) => {
      setListOfItems((list) => {
          return list.filter(listOfItems => listOfItems.key !== key)
      })
  }
  return (
    <View style={styles.container}>
      <Header/>
        <Form addHandler={addHandler}/>
        <View>
          <FlatList data={listOfItems} renderItem={({item}) => (
              <ListItem el={item} deleteHandler={deleteHandler}/>
          )}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
          container: {
             flex: 1,
             marginTop: StatusBar.currentHeight || 0,
        },
});

