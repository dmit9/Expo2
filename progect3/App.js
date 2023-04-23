import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font';
import Main from "./components/Main";
const  fonts = () => Font.loadAsync({
    'font-bold': require('./assets/font/Roboto-Bold.ttf'),
    'font-light': require('./assets/font/Roboto-Light.ttf')
})

export default function App() {
    const [font, setFont] = useState(false);
    if(font) {
        return (
            <Main />
        )
    }
    else {
        return (
            < AppLoading startAsync={fonts}
                         onFinish={() => setFont(true)}
                           onError={console.warn()} />
        )
    }

}



