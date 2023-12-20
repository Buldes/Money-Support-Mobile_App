import React from 'react';
import {Text, View, StyleSheet, Button, StatusBar} from 'react-native';
import { useState } from 'react';
import DefaultLable from '../components/Lables/default';

const MainMenu = () => {
    const [count, setCount] = useState(0)

  return (
      <View  style={{flex:1, ...style.dark}}>
          <StatusBar backgroundColor="black"/>
  
          <DefaultLable text="Hello World"/>
          <Text> Hello World </Text>
      </View>
  );
};

const style = StyleSheet.create({light: {
    color: '#000',
    backgroundColor: '#fff',
  },
  dark: {
    color: '#fff',
    backgroundColor: '#000',
  },
})

export default MainMenu;