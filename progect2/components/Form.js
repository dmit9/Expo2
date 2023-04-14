import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function Form({addHandler}) {
    const [text, setValue] = useState('')
    const OnChange = (text) => {
        setValue(text)
    }
    return (
        <View>
            <TextInput style={styles.input} onChangeText={OnChange} placeholder={"Введите текст"}/>
            <Button color={'green'} onPress={() => addHandler(text)} title={'Добавить задачу'} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        marginVertical: 20,
        marginHorizontal: '20%',
        width: '60%'
    }
});