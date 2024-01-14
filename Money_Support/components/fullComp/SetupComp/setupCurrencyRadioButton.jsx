import React from "react";
import { StyleSheet, View } from "react-native";
import { allCurrencies } from "../../../variables/dictionary";
import CurrencyRadioButtonLable from "./Label/setupCurrencyRadioButtonLable ";
import DefaultRadioButton from "../../RadioButton/default";
import languageDictionary from "../../../Functions/getLanguageDictionary";

const SetupCurrencyRadioButton = (props) => {
    const {} = props;

    const dictionary = languageDictionary()

    const styles = StyleSheet.create({

    })

    var listItems = {}
    Object.keys(allCurrencies).map((allCurrencyKey) => 
        listItems[allCurrencyKey] = <CurrencyRadioButtonLable text={dictionary[allCurrencyKey]} currency={allCurrencyKey}/>)

    return(
        <View>
            <DefaultRadioButton list={listItems} selected={props.selected} setSelected={props.setSelected} listItemWidth={275} listItemHeight={40} />
        </View>
    );
}

export default SetupCurrencyRadioButton;