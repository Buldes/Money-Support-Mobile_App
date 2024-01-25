import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import colorPallet from "../../../constants/Colors";
import { StatusBar } from "expo-status-bar";
import SetupLanguage from "./setupLanguage";
import { SetNumLayout, setCurrency, setCurrentUserKey, setLanguage } from "../../../variables/string";
import SetupCurrency from "./setupCurrency";
import DefaultButton from "../../Buttons/default";
import languageDictionary from "../../../Functions/getLanguageDictionary";
import pressColorPallet from "../../../constants/onPressColor";
import SetupLayout from "./setupLayout";
import SetupSetNewName from "./setupSetNewName";
import { SaveCurrentUserKey, SaveSettings } from "../../../Functions/dataDealer";

const Setup = (props) => {
    const [languageSelected, setLanguageSelected] = useState("en")
    const [currencySelected, setCurrencySelected] = useState("EUR")
    const [layoutSelected, setLayoutSelected] = useState("de-DE")
    const [newName, SetNewName] = useState(null)
    const [stage, setStage] = useState("SetLanguage") // 1. SetLanguage, 2. SetCurrency, 3. SetLayout, 4. SetNewName, 5.setup-finish
    const [finish, setFinish] = useState(false) // finish is true, when user input for newUserName is vailid

    setLanguage(languageSelected)
    setCurrency(currencySelected)
    SetNumLayout(layoutSelected)
    

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

    const FinishSetup = async () => {
        await SaveSettings().then( async (e) => {
            if (e != undefined) console.log(e)
            setCurrentUserKey(newName)
            await SaveCurrentUserKey().then((e) => {
                if (e != undefined) console.log(e)
                props.setupFinish()
            })
        })
    }

    const NextCick = () => {
        if (stage == "SetLanguage") setStage("SetCurrency")
        else if (stage == "SetCurrency") setStage("SetLayout")
        else if (stage == "SetLayout") setStage("SetNewName")
        else if (stage == "SetNewName") {
            setStage("setup-finish")
            FinishSetup()
        }
    }
    const BackCick = () => {
        if (stage == "SetLanguage") setLanguageSelected("en")
        else if (stage == "SetCurrency") setStage("SetLanguage")
        else if (stage == "SetLayout") setStage("SetCurrency")
        else if (stage == "SetNewName") setStage("SetLayout")
    }

    const HandleInput = (value) => {
        SetNewName(value)
        if (value != null && value != "" && value.trim() != "" && value != "settings" && value != "currentUser") setFinish(true)
        else setFinish(false)
    }

    return(
        <View style={styles.container}>
            {stage == "SetLanguage" ? <SetupLanguage selected={languageSelected} setSelected={setLanguageSelected}/>
            : stage == "SetCurrency" ? <SetupCurrency  selected={currencySelected} setSelected={setCurrencySelected}/>
            : stage == "SetLayout" ? <SetupLayout selected={layoutSelected} setSelected={setLayoutSelected}/> 
            : stage == "SetNewName" ? <SetupSetNewName value={newName} onChangeText={(e) => HandleInput(e)}/>: ""}

            <View style={styles.buttonView}>
                {stage != "SetLanguage" && stage != "setup-finish" ? <DefaultButton text={dictionary["Back"]} add={{flex:1}} backGround={colorPallet.bg_5e} pressedColor={pressColorPallet.bg_5e} onPress={BackCick} marginRight={10}/>: ""}

                {stage == "setup-finish" ? "":
                stage != "SetNewName" ? <DefaultButton text={dictionary["Next"]} add={{flex:1}}  onPress={NextCick}/>:
                 finish ? <DefaultButton text={dictionary["Finish"]} backGround={colorPallet.bg_rGb_2f9f1f} pressedColor={pressColorPallet.bg_rGb_2f9f1f} add={{flex:1}}  onPress={NextCick}/>:
                 <DefaultButton text={dictionary["Finish"]} backGround={colorPallet.bg_2e} pressedColor={pressColorPallet.bg_Rgb_bf1f1f} add={{flex:1}} />}
                
            </View>

            <StatusBar style="light" backgroundColor={colorPallet.bg_1f}/>
        </View>
    );
}

export default Setup;