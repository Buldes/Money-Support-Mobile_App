import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import DefaultLabel from "../Lables/default";
import colorPallet from "../../constants/Colors";

const DefaultButton = (props) => {
    const {backGround=colorPallet.bg_rgB_0d0dff, width=undefined, height=undefined} = props;

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
            ...props.add
        }
    })

    return(
        <Pressable style={styles.button} onPress={props.onPress}>
            <DefaultLabel text={props.text} backGround={colorPallet.transperent}/>
            {props.addComp}
        </Pressable>
    );
}

export default DefaultButton;