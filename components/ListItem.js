import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableNativeFeedback, TextInput} from 'react-native';

export default function ListItem({item, delText, updText}) {

    const [focused, setFocus] = useState(false);
    const [text, setText] = useState(item.text);

    const id = item.key;

    const onUpd = () => {
        if(text !== '') {
            updText(text, id)
        }
        setText('');
    }

    if (focused) {
        return(
            <View style={styles.block}>
                <TextInput 
                    autoFocus
                    style={styles.input}
                    key={id}
                    onChangeText={(text) => setText(text)} 
                    defaultValue={text}/>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={()=>{setFocus(false), onUpd}}>
                        <View style={styles.btnUpd}>
                            <Text>U</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => delText(item.key)}>
                        <View style={styles.btnDel}>
                            <Text>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.block}>
            <Text
                style={styles.text} 
                key={item.key} 
                selectable={true}>
                    {item.text}
            </Text>
            <View style={styles.btns}>
                <TouchableOpacity onPress={() => setFocus(true)}>
                    <View style={styles.btnUpd}>
                        <Text>U</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => delText(item.key)}>
                    <View style={styles.btnDel}>
                        <Text>X</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#4AA02C",
        marginVertical: 15,
        padding: 15,
        marginHorizontal: 45,
        borderRadius: 20,
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginLeft: 5,
        paddingRight: 10,
        width: '80%'
    },

    input: {
        color: 'white',
        fontSize: 20,
        marginLeft: 5,
        paddingRight: 10,
        width: '70%'
    },
    btnDel: {
        backgroundColor: 'red',
        padding: 3.5,
        borderRadius: 5,
        width: 20,
        display: 'flex',
        alignItems: 'center',
    },
    btnUpd: {
        backgroundColor: 'yellow',
        padding: 3.5,
        borderRadius: 5,
        width: 20,
        display: 'flex',
        alignItems: 'center',
        marginRight: 5
    },

    btns: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});