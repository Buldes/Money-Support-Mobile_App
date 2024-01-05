import React from 'react';
import { View, StyleSheet } from 'react-native';
import colorPallet from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

const SettingsMenu = () => {

   return (
     <View style={{flex:1, backgroundColor:colorPallet.black}}> 
      <ScrollView alignItems="center"  style={{flex:1, ...style.dark}}>

        
       <StatusBar style="light" backgroundColor={colorPallet.black}/>

      </ScrollView>
     </View>

   );
};

const style = StyleSheet.create({
  screen: {
      flex: 1,
  }
})

export default SettingsMenu;