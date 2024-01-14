import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FontAwsomeIcon from "react-native-vector-icons/FontAwesome"
import colorPallet from "../../constants/Colors";

const DefaultRadioButton = (props) => {
    const { radioMarginLeft = 10, unselectedListItemBackGround=colorPallet.bg_2e, selectedListItemBackGround = colorPallet.bg_3e,  listItemBorderRadius = 10, listItemMarginTop = 5,
            radioSize=20, radioActive="check-square", radioInactive="square", textMarginLeft=10, textItemDirection="row", 
            unselectedRadioColor= colorPallet.bg_2e, selectedRadioColor= colorPallet.white} = props;
    const list = props.list

    const styles = StyleSheet.create({
        container:{
            marginBottom:props.marginBottom,
            marginLeft:props.marginLeft,
            marginTop:props.marginTop,
            marginRight:props.marginRight,
            ...props.add
        },
        radio: {
            marginBottom:props.radioMarginBottom,
            marginTop:props.radioMarginTop,
            marginRight:props.radioMarginRight,
            marginLeft:radioMarginLeft,
            backgroundColor:props.radioBackground,
            ...props.addRadio
        },
        listItemStyle:{
            backgroundColor: unselectedListItemBackGround,
            borderRadius:listItemBorderRadius,
            width:props.listItemWidth,
            height:props.listItemHeight,
            marginBottom:props.listItemMarginBottom,
            marginLeft:props.listItemMarginLeft,
            marginTop:listItemMarginTop,
            marginRight:props.listItemMarginRight,
            flexDirection:"row",
            ...props.listItemStyle
        },
        textStyle:{
            marginLeft:textMarginLeft,
            flexDirection:textItemDirection,
            ...props.textStyle
        }
    })


    return(
        <View>

            {Object.keys(list).map((listKey) =>( 
                <Pressable alignItems="center" style={[styles.listItemStyle, props.selected == listKey ? {backgroundColor:selectedListItemBackGround} : {}]} key={listKey} onPress={() => props.setSelected(listKey)}>
                    <View style={{alignItems:"center", justifyContent:"center", ...styles.radio}}>
                        <FontAwsomeIcon size={radioSize} name={props.selected == listKey ? radioActive: radioInactive} color={props.selected == listKey ? selectedRadioColor : unselectedRadioColor}/>
                    </View>
                    <Text style={styles.textStyle}>{list[listKey]}</Text>
                </Pressable>
            ))}

        </View>
    );
}

export default DefaultRadioButton;