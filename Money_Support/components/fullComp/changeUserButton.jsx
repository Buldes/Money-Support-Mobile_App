import React from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import FontAwsomeIcon from "react-native-vector-icons/FontAwesome"
import colorPallet from "../../constants/Colors";
import pressColorPallet from "../../constants/onPressColor";

const CahngeUserButton = (props) => {
    const { size=50 } = props;

    const styles = StyleSheet.create({
        default:{
            backgroundColor:colorPallet.bg_rgB_3065e8,
            justifyContent:"center",
            alignItems:"center",
            width:size,
            height:size,
            borderRadius:size,
            marginLeft:Dimensions.get("window").width - size - 30,
            marginBottom:10
        }
    })

    return(
        <View style={{backgroundColor:colorPallet.transperent, marginTop:-100, zIndex:10}}>
            <Pressable onPress={props.onPress} style={({pressed}) => [styles.default, pressed ? {backgroundColor:pressColorPallet.bg_rgB_3065e8}: {}]}>
                <FontAwsomeIcon name="users" size={size / 2}/>
            </Pressable>
        </View>
    );
}

export default CahngeUserButton;