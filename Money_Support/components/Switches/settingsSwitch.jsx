import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import DefaultSwitch from "./default";
import colorPallet from "../../constants/Colors";
import pressColorPallet from "../../constants/onPressColor";
import DefaultLabel from "../Lables/default";

const SettingsSwitch = (props) => {
    const {backGround=colorPallet.bg_2e, pressedColor=pressColorPallet.bg_2e} = props
    const styles = StyleSheet.create({
        parant:{
            flexDirection:"row",
            justifyContent:"flex-start",
            alignItems:"center",
            backgroundColor:backGround,
            borderRadius:5,
            marginTop:10,
            marginHorizontal:10,
            height:36
        }
    })

    return(
        <Pressable style={({pressed}) => [ styles.parant, pressed ? { backgroundColor:pressedColor } : {} ]} onPress={props.onPress}>
            <DefaultLabel fontSize={18} marginLeft={5}  text={props.text} backGround={colorPallet.transperent} textAlign="left" flex={1}/>
            <DefaultSwitch isEnabled={props.isEnabled} toggleSwitch={props.onPress}/>
        </Pressable>
    );
}

export default SettingsSwitch;