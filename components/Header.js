import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Header() {
  
  return (
    <View style={styles.main}>
        <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    height: 100,
    backgroundColor: '#F3E5AB',
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    fontSize: 35,
    color: 'red',
  }
});