import React from 'react';
import { StyleSheet, Text, Pressable} from 'react-native';


export default function ListItem({el, deleteHandler}) {

    return (
        <Pressable onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(250,250,250,0.74)',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%'
    }
});