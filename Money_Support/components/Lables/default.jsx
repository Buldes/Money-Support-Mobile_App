import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import colorPallet from "../../constants/Colors";

const DefaultLabel = (props) => {
    const { textColor = "white", fontSize = 20, fontFamily='Nunito', borderRadius=5,
            backGround=colorPallet.bg_5e, textAlign="center", textAlignVertical='center'} = props;

    const styles = StyleSheet.create({
        textStyle: { color: textColor, fontSize: fontSize, fontFamily:fontFamily, backgroundColor:backGround, borderRadius:borderRadius, 
                    top:props.top, left:props.left, width:props.width, height:props.height, marginLeft:props.marginLeft, marginTop:props.marginTop, marginBottom:props.marginBottom,
                    ...props.add, textAlign:textAlign, textAlignVertical:textAlignVertical}
    });

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

    // retrun defult Lable, when setup is ready
    return (
        <Text style={styles.textStyle}>{props.text}</Text>
    );
};

export default DefaultLabel;
