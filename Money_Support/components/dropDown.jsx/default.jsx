import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import colorPallet from "../../constants/Colors";
import * as Font from 'expo-font';

const DefaulDropBox = (props) => {
    const { backGround=colorPallet.bg_4e, fontSize=20, fontFamily="Nunito", borderRadius=10, borderColor=colorPallet.transperent,
            dropDownBackGround=colorPallet.bg_3e, dropDonwSelectedColor=colorPallet.bg_4e, height=10, dropdownBorderColor=colorPallet.transperent } = props;


    const styles = StyleSheet.create({
        default:{
          backgroundColor:backGround,
          minHeight:height,
          borderRadius:borderRadius,
          borderColor:borderColor,
          width:props.width,
          marginBottom:props.marginBottom,
          marginLeft:props.marginLeft,
          marginTop:props.marginTop,
          marginRight:props.marginRight
          
        },
        lable:{
          textAlign:"center",
          fontSize:fontSize,
          fontFamily:fontFamily,
          color:"white",
          minHeight:height,
          width:props.width,
          marginBottom:props.marginBottom,
          marginLeft:props.marginLeft,
          marginTop:props.marginTop,
          marginRight:props.marginRight
        },
        transform:{
          width:props.width,
          marginBottom:props.marginBottom,
          marginLeft:props.marginLeft,
          marginTop:props.marginTop,
          marginRight:props.marginRight}
    })
    
    const [open, setOpen] = useState(false);
    
    // only load font, if it's used
    if (fontFamily == "Nunito"){
      // load Font, because it is not a system font
      const [fontLoaded, setFontLoaded] = useState(false);
         useEffect(() => {
             async function loadFont() {
                 await Font.loadAsync({
                     'Nunito': require('../../assets/fonts/Nunito-Regular.ttf'),
                 });
                 setFontLoaded(true);
             }
             loadFont();
         }, []);
         if (!fontLoaded) {
             // font is still loading, retur nothing
             return null
         }
  }

    return (
      <DropDownPicker
        style={styles.default}
        textStyle={styles.lable}

        listItemLabelStyle={{color:"#fff"}}
        selectedItemContainerStyle={{
          backgroundColor: dropDonwSelectedColor
        }}
        dropDownContainerStyle={{
          backgroundColor:dropDownBackGround,
          borderColor:dropdownBorderColor,
          ...styles.transform
        }}
        containerStyle={{
          zIndex: open ? 1000 : 0
        }}


        open={open}
        value={props.value}
        items={props.items}
        setOpen={setOpen}
        setValue={props.setValue}
        setItems={props.setItems}
      />
    );
}

export default DefaulDropBox;