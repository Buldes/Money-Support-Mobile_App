import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import BankBalanceLable from '../components/Lables/bankBalance';
import HeadLine from '../components/Lables/headlins';
import colorPallet from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import languageDirectory from '../Functions/getLanguageDirectory';
import ExpendituresInfo from '../components/fullComp/info';

const MainMenu = () => {
  
  const directory = languageDirectory();

  return (
    <View style={{flex:1, ...style.dark}}>  
    
      <StatusBar style="light" backgroundColor="#000"/> 

      <ScrollView alignItems="center"  style={{flex:1, ...style.dark}}>

          <View style={{marginTop:10, ...style.dark}}>
            <HeadLine text={directory["no user jet"]}/>
          </View>

          <View style={{alignItems:"center", ...style.upArear}}>

            <View>
              <BankBalanceLable text="1.134,87€" marginTop={30}/>
            </View>

            <ExpendituresInfo/>

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