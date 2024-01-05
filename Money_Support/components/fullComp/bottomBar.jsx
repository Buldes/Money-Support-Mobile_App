import React from "react";
import { StyleSheet, View, Dimensions, Pressable } from "react-native";
import colorPallet from "../../constants/Colors";
import pressColorPallet from "../../constants/onPressColor";
import FontAwsomeIcon from "react-native-vector-icons/FontAwesome"

const BottomBar = (props) => {
    const {} = props;
    
    const screenSize = Dimensions.get("window").width

    const styles = StyleSheet.create({
        bottomBar:{
          height:40,
          width:screenSize,
          backgroundColor:colorPallet.black,
          flexDirection:"row"
        },
        buttons:{
            backgroundColor:colorPallet.black,
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        },
        activeLine:{
            backgroundColor:colorPallet.white,
            height:4,
            width:screenSize / 2,
            borderRadius:10,
            marginBottom:7
        },
        inactiveLine:{
            backgroundColor:colorPallet.bg_5e,
            height:3,
            width:screenSize / 2,
            borderRadius:10,
            marginBottom:7
        }
    })

    return(
        <View style={styles.bottomBar}>
            
            <Pressable onPress={props.homePress} style={({pressed}) => [styles.buttons, pressed ? {backgroundColor:pressColorPallet.black}: {}]}>
                <View style={props.menu == "MainMenu" ? styles.activeLine: styles.inactiveLine}></View>
                <FontAwsomeIcon name="home" size={30} color={colorPallet.white}/>
            </Pressable>

            <Pressable onPress={props.settingsPress} style={({pressed}) => [styles.buttons, pressed ? {backgroundColor:pressColorPallet.black}: {}]}>
                <View style={props.menu == "Settings" ? styles.activeLine: styles.inactiveLine}></View>
                <FontAwsomeIcon name="gears" size={30} color={colorPallet.white}/>
            </Pressable>

        </View>
    );
}

export default BottomBar;