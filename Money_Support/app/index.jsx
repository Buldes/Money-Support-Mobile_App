import React from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';
import { useState } from 'react';
import DefaultLable from '../components/Lables/default';

const MainMenu = () => {

  return (
      <View  style={{flex:1, ...style.dark}}>
      <StatusBar backgroundColor="black" barStyle="light-content"/>

          <DefaultLable text="Hello World"/>
  
      
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