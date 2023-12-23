import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import BankBalanceLable from '../components/Lables/bankBalance';
import HeadLine from '../components/Lables/headlins';
import colorPallet from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const MainMenu = () => {

  return (
    <View style={{flex:1, ...style.dark}}>  
      <StatusBar style="light" backgroundColor="black"/>    

      <ScrollView alignItems="center"  style={{flex:1, ...style.dark}}>

          <View style={{marginTop:10, ...style.dark}}>
            <HeadLine text="no user jet"/>
          </View>

          <View style={{alignItems:"center", ...style.upArear}}>
            <BankBalanceLable text="1.134,87€" top={30}/>
          </View>

          <View style={{alignItems:"center", ...style.downArear}}>
            <BankBalanceLable text="1.134,87€" top={30}/>
          </View>
      
      </ScrollView>
    </View>

  );
};

const style = StyleSheet.create({
  screen: {
      flex: 1,
  },
  dark: {
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