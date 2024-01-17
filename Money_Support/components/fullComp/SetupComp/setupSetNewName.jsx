import React from "react";
import { StyleSheet, View } from "react-native";
import DefaultLabel from "../../Lables/default";
import colorPallet from "../../../constants/Colors";
import languageDictionary from "../../../Functions/getLanguageDictionary";
import DefaultInputField from "../../inputField/default";

const SetupSetNewName = (props) => {
    const {} = props;

    const dictionary = languageDictionary()

    const styles = StyleSheet.create({
        container:{
            alignItems:"center",
            backgroundColor:colorPallet.transperent,
            width:310,
            height:150,
            borderRadius:40
        },
        scrollView:{
            width:300, 
            height:400, 
            borderRadius:40,
            overflow:"hidden"
        }
    })

    let num = 10000

    return(
        <View style={styles.container}>
            <DefaultLabel text={dictionary["Type in a name for your first User."]} backGround={colorPallet.bg_3e} marginTop={0} width={310} marginBottom={10} borderRadius={40} height={60}/>

            <View style={[styles.container, {flex:1,}]}>
                <DefaultInputField width={310} height={50} borderRadius={40} backGround={colorPallet.bg_3e} 
                    value={props.value} onChangeText={props.onChangeText} 
                    placeholder={`[${dictionary["Type name here"]}]`}
                    marginTop={5}/>
            </View>
        </View>
    );
}

export default SetupSetNewName;