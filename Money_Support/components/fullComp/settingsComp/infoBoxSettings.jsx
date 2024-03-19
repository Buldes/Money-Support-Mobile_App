import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import DefaultSwitch from "../../Switches/default";
import SettingsSwitch from "../../Switches/settingsSwitch";
import { SaveSettings } from "../../../Functions/dataDealer";
import { SetInfoLableSettings, infoLableSettings } from "../../../variables/dictionary";
import languageDictionary from "../../../Functions/getLanguageDictionary";

const InfoBoxSettings = (props) => {
    const dictionary = languageDictionary()

    const [enabledSwitches, setEnabledSwitches] = useState(infoLableSettings)

    useEffect(() => {
        
        SetInfoLableSettings(enabledSwitches)

        const save = async () => {
            await SaveSettings().then(() => {
                
            })
        }
        save()
    }, [enabledSwitches])

    return(
        <View>
            <SettingsSwitch
                onPress={() => setEnabledSwitches(Object.assign({}, enabledSwitches, {"avargeExpenditures":!enabledSwitches["avargeExpenditures"]}))}
                isEnabled={enabledSwitches["avargeExpenditures"]} text={`${dictionary["Avarge expenditures"]}`}/>
            <SettingsSwitch
                onPress={() => setEnabledSwitches(Object.assign({}, enabledSwitches, {"currentExpenditures":!enabledSwitches["currentExpenditures"]}))}
                isEnabled={enabledSwitches["currentExpenditures"]} text={`${dictionary["Current expenditures"]}`}/>
            
            <View style={{marginBottom:10}}></View>

            <SettingsSwitch
                onPress={() => setEnabledSwitches(Object.assign({}, enabledSwitches, {"avargeIncome":!enabledSwitches["avargeIncome"]}))}
                isEnabled={enabledSwitches["avargeIncome"]} text={`${dictionary["Avarge income"]}`}/>
            <SettingsSwitch
                onPress={() => setEnabledSwitches(Object.assign({}, enabledSwitches, {"currentIncome":!enabledSwitches["currentIncome"]}))}
                isEnabled={enabledSwitches["currentIncome"]} text={`${dictionary["Current income"]}`}/>
            
        </View>
    );
}

export default InfoBoxSettings;