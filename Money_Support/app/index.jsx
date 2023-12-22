import React from 'react';
import { View, StyleSheet, StatusBar, Dimensions } from 'react-native';
import BankBalanceLable from '../components/Lables/bankBalance';
import HeadLine from '../components/Lables/headlins';
import colorPallet from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const MainMenu = () => {

  return (
      <ScrollView alignItems="center"  style={{flex:1, ...style.dark}}>

          <StatusBar backgroundColor="black" barStyle="light-content"/>

          <View style={style.dark}>
            <HeadLine text="no user jet"/>
          </View>

          <View style={{alignItems:"center", ...style.upArear}}>
            <BankBalanceLable text="1.134,87€" top={30}/>
          </View>

          <View style={{alignItems:"center", ...style.downArear}}>
            <BankBalanceLable text="1.134,87€" top={30}/>
          </View>
      
      </ScrollView>
  );
};

const style = StyleSheet.create({
  light: {
    color: '#000',
    backgroundColor: '#fff',
  },
  dark: {
    color: '#fff',
    backgroundColor: '#000'
  },
  upArear: {
    backgroundColor: colorPallet.bg_1f,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    height:500,
    borderRadius:10,
    width:Dimensions.get("window").width - 10

  },
  downArear: {
    backgroundColor: colorPallet.bg_2e,
    marginBottom: 10,
    flex: 1,
    borderRadius:10,
    width:Dimensions.get("window").width - 10
  }
})

export default MainMenu;