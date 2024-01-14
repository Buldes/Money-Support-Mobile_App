import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import colorPallet from "../../../constants/Colors";
import { StatusBar } from "expo-status-bar";
import SetupLanguage from "./setupLanguage";
import { setCurrency, setLanguage } from "../../../variables/string";
import SetupCurrency from "./setupCurrency";
import DefaultButton from "../../Buttons/default";
import languageDictionary from "../../../Functions/getLanguageDictionary";
import pressColorPallet from "../../../constants/onPressColor";

const Setup = (props) => {
    const [languageSelected, setLanguageSelected] = useState("en")
    const [currencySelected, setCurrencySelected] = useState("EUR")
    const [stage, setStage] = useState("SetCurrency")

    setLanguage(languageSelected)
    setCurrency(currencySelected)
    

    const dictionary = languageDictionary()

    const styles = StyleSheet.create({
        container:{
            backgroundColor:colorPallet.bg_1f,
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        },
        buttonView:{
            width:300,
            height:40,
            marginTop:20,
            justifyContent:"center",
            flexDirection:"row"
        }
    })

    const NextCick = () => {
        if (stage == "SetLanguage") setStage("SetCurrency")
        else if (stage == "SetCurrency") setStage("SetLayout")
        else if (stage == "SetLayout") setStage("setup-finish")
    }
    const BackCick = () => {
        if (stage == "SetLanguage") setLanguageSelected("en")
        else if (stage == "SetCurrency") setStage("SetLanguage")
        else if (stage == "SetLayout") setStage("SetCurrency")
    }

    return(
        <View style={styles.container}>
            {stage == "SetLanguage" ? <SetupLanguage selected={languageSelected} setSelected={setLanguageSelected}/>
            : stage == "SetCurrency" ? <SetupCurrency  selected={currencySelected} setSelected={setCurrencySelected}/>: ""}

            <View style={styles.buttonView}>
                {stage != "SetLanguage" ? <DefaultButton text={dictionary["Back"]} add={{flex:1}} backGround={colorPallet.bg_5e} pressedColor={pressColorPallet.bg_5e} onPress={BackCick} marginRight={10}/>: ""}

                {stage != "SetLayout" ? <DefaultButton text={dictionary["Next"]} add={{flex:1}}  onPress={NextCick}/>:
                                        <DefaultButton text={dictionary["Finish"]} backGround={colorPallet.bg_rGb_2f9f1f} pressedColor={pressColorPallet.bg_rGb_2f9f1f} add={{flex:1}}  onPress={NextCick}/>}
                
            </View>

            <StatusBar style="light" backgroundColor={colorPallet.bg_1f}/>
        </View>
    );
}

export default Setup;