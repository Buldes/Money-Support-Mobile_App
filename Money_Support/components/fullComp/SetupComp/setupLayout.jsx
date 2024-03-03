import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import DefaultLabel from "../../Lables/default";
import colorPallet from "../../../constants/Colors";
import SetupLanguagRadioButton from "../../RadioButton/setupLanguageRadio";
import languageDictionary from "../../../Functions/getLanguageDictionary";
import ValueToString from "../../../Functions/valueToString";
import SetupLayoutRadioButton from "./setupLayoutRadioButton";

const SetupLayout = (props) => {
    const {} = props;

    const dictionary = languageDictionary()

    const styles = StyleSheet.create({
        container:{
            alignItems:"center",
            backgroundColor:colorPallet.bg_2e,
            width:300,
            height:545,
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
            <DefaultLabel text={dictionary["Choose your Layout"]} backGround={colorPallet.bg_3e} marginTop={0} width={300} marginBottom={10} borderRadius={40} height={60}/>

            <View style={[styles.container, {flex:1, overflow:"hidden"}]}>
                <ScrollView alignItems={"center"} style={styles.scrollView}>
                    <SetupLayoutRadioButton selected={props.selected} setSelected={props.setSelected}/>
                </ScrollView>
            </View>
        </View>
    );
}

export default SetupLayout;