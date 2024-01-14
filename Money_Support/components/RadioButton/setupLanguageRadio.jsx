import React from "react";
import { StyleSheet, View } from "react-native";
import DefaultRadioButton from "./default";
import LanguagRadioButtonLable from "../fullComp/SetupComp/Label/setupLanguageradioButtonLable";
import { allLanguages, flagForLanguage } from "../../variables/dictionary";

const SetupLanguagRadioButton = (props) => {
    const {} = props;

    const styles = StyleSheet.create({

    })

    var listItems = {}
    Object.keys(allLanguages).map((languageKey) => listItems[languageKey] = <LanguagRadioButtonLable text={allLanguages[languageKey]} isoCode={flagForLanguage[languageKey]}/>)

    return(
        <View>
            <DefaultRadioButton selected={props.selected} setSelected={props.setSelected} list={listItems} listItemWidth={250} listItemHeight={40} />
        </View>
    );
}

export default SetupLanguagRadioButton;