import React, {useState} from 'react';
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font';
import MainStack from "./navigate";
const  fonts = () => Font.loadAsync({
    'font-bold': require('./assets/font/Roboto-Bold.ttf'),
    'font-light': require('./assets/font/Roboto-Light.ttf')
})

export default function App() {
    const [font, setFont] = useState(false);
    if(font) {
        return (
            <MainStack />
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



