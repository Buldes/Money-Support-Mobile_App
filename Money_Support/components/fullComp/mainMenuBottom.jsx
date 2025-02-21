import React from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import FontAwsomeIcon from "react-native-vector-icons/FontAwesome"
import colorPallet from "../../constants/Colors";
import pressColorPallet from "../../constants/onPressColor";
import DefaultButton from "../Buttons/default";
import languageDictionary from "../../Functions/getLanguageDictionary";

const MainMenuBottom = (props) => {
    const { size=50 } = props;
    const dictionary = languageDictionary()

    const styles = StyleSheet.create({
        default:{
            backgroundColor:colorPallet.bg_rgB_3065e8,
            justifyContent:"center",
            alignItems:"center",
            width:size,
            height:size,
            borderRadius:size,
            marginLeft:Dimensions.get("window").width - size - 50,
            marginBottom:5,
            marginTop:5
        },
        bar:{
            backgroundColor:`${colorPallet.bg_1a}dd`, 
            marginTop:-100,
            marginLeft:5,
            marginRight:5,
            zIndex:10,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
        }
    })

    return(
        <View style={styles.bar}>

            <DefaultButton onPress={props.onPressEIC} text={dictionary["New Entry"]} width={150} height={size - 10} marginTop={10} backGround={colorPallet.bg_rgB_134ab0} marginLeft={5} add={{position:'absolute'}}/>
            
            <Pressable onPress={props.onPressCUB} style={({pressed}) => [styles.default, pressed ? {backgroundColor:pressColorPallet.bg_rgB_3065e8}: {}]}>
                <FontAwsomeIcon name="users" size={size / 2}/>
            </Pressable>
        </View>
    );
}

export default MainMenuBottom;