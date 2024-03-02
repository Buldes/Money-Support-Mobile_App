import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import FontAwsomeIcon from "react-native-vector-icons/FontAwesome"
import colorPallet from "../../constants/Colors";
import pressColorPallet from "../../constants/onPressColor";
import DefaultLabel from "../Lables/default";

const SettingsMenuButton = (props) => {
    const {icon="chevron-right",iocnSize=20, iconColor=colorPallet.white, backGround=colorPallet.bg_2e, pressedColor=pressColorPallet.bg_2e} = props
    const styles = StyleSheet.create({
        parant:{
            flexDirection:"row",
            justifyContent:"flex-start",
            alignItems:"center",
            backgroundColor:backGround,
            borderRadius:5,
            marginTop:10
        }
    })

    return(
        <Pressable style={({pressed}) => [ styles.parant, pressed ? { backgroundColor:pressedColor } : {} ]} onPress={props.onPress}>
            <DefaultLabel fontSize={18} marginLeft={5} marginTop={5} marginBottom={5} text={props.text} backGround={colorPallet.transperent} textAlign="left" flex={1}/>
            <FontAwsomeIcon name={icon} size={iocnSize} color={iconColor} style={{marginHorizontal:10}}/>
        </Pressable>
    );
}

export default SettingsMenuButton;