import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import InputToDo from './components/InputToDo';

export default function App() {
  
  const  [listOfItems, setListOfItems] = useState([
    {text: 'Пример', key: '1'},
  ])

  const addText = (txt) => {
    setListOfItems((list) => {
      return [
          {text: txt, key: Math.floor(Math.random()*8998484).toString()},
          ...list
      ]
    })
  }

  const delText = (key) => {
    setListOfItems((list) => {
      return list.filter(item => item.key != key)
    })
  }

  useEffect(() => {

  })

  const updText = (text, key) => {
    // setListOfItems((list) => {
    //   const updList = list.map(item => {
    //     if(item.key == key) {
    //       item.text = text
    //     }
    //   });
    //   // const updText = list.find(item => item.key == key);
    //   return updList;
    // })
    setListOfItems((list) => {
      const updList = list.filter(item => item.key != key);
      return [
        {text: text, key: Math.floor(Math.random()*8998484).toString()},
        ...updList
      ]
    })
  }
  console.log(listOfItems);

  return (
    <>
    <Header/>
    <ScrollView>
      <InputToDo addText={addText}/>
      <View 
        style={styles.listBlock}>
        <FlatList 
          data={listOfItems} 
          renderItem={({item}) => (
          <ListItem item={item} delText={delText} updText={updText}/>
        )}/>
      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({

});
