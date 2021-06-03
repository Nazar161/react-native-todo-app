import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button, TextInput,} from 'react-native';

export default function InputToDo({addText}) {
    
    const [text, setText] = useState('');

    const onAdd = () => {
        if(text !== '') {
            addText(text)
        }
        setText('')
    }
    return(
        <View style={styles.main}>
            <TextInput 
                style={styles.inputStyle}
                placeholder="Впишите задачу" 
                onChangeText={(text) => setText(text)} 
                defaultValue={text}/>
            <Button title='Добавить задачу' onPress={onAdd}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 2,
        borderColor: 'black',
        width: '80%',
        borderRadius: 10,
        height: 50,
        paddingLeft: 5,
        backgroundColor: '#C2DFFF',
        fontSize: 20,
        marginBottom: 10
    },
    main: {
        marginTop: 30,
        display: 'flex',
        alignItems: 'center',
        // backgroundColor: 'silver'
    }
});