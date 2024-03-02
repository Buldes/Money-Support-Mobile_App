import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import DefaultLabel from "../Lables/default";
import colorPallet from "../../constants/Colors";
import pressColorPallet from "../../constants/onPressColor";

const DefaultButton = (props) => {
    const {backGround=colorPallet.bg_rgB_134ab0, width=undefined, height=undefined, pressedColor=pressColorPallet.bg_rgB_134ab0} = props;

    const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: backGround,
            width:width,
            height:height,
            marginLeft:props.marginLeft,
            marginRight:props.marginRight,
            marginBottom:props.marginBottom,
            marginTop:props.marginTop,
            left:props.left,
            right:props.right,
            position:props.position,
            flex:props.flex,
            ...props.add
        }
    })

    return(
        <Pressable style={({pressed}) => [ styles.button, pressed ? { backgroundColor:pressedColor } : {} ]} onPress={props.onPress}>
            <DefaultLabel text={props.text} backGround={colorPallet.transperent}/>
            {props.addComp}
        </Pressable>
    );
}

export default DefaultButton;