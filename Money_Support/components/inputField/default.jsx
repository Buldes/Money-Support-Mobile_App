import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput } from "react-native";
import * as Font from 'expo-font';

const DefaultInputField = (props) => {
    const { borderWidth=1, borderColor="#000", borderRadius=10, textAlign="center", type="default", fontFamily="Nunito", fontSize=20, 
            fontColor="white", placeholderTextColor="grey" } = props;

    const styles = StyleSheet.create({
        default:{
            height: props.height,
            width: props.width,
            borderWidth: borderWidth,
            borderColor:borderColor,
            borderRadius:borderRadius,
            textAlign:textAlign,
            marginBottom:props.marginBottom,
            marginLeft:props.marginLeft,
            marginTop:props.marginTop,
            marginRight:props.marginRight,
            fontFamily:fontFamily,
            fontSize:fontSize,
            color:fontColor
        }
    })

    // only load font, if it's used
    if (fontFamily == "digital-7"){
        // load Font, because it is not a system font
        const [fontLoaded, setFontLoaded] = useState(false);
           useEffect(() => {
               async function loadFont() {
                   await Font.loadAsync({
                       'digital-7': require('../../assets/fonts/digital-7.ttf'),
                   });
                   setFontLoaded(true);
               }
               loadFont();
           }, []);
           if (!fontLoaded) {
               // font is still loading, return nothing
               return null
           }
    }
    else if (fontFamily == "Nunito"){
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
               // font is still loading, return nothing
               return null
           }
    }


    return(
        <TextInput 
            style={styles.default}
            keyboardType={type}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor={placeholderTextColor}/>
    );
}

export default DefaultInputField;