import React from "react";
import { StyleSheet, View } from "react-native";
import { allCurrencies, allNumLayouts } from "../../../variables/dictionary";
import CurrencyRadioButtonLable from "./Label/setupCurrencyRadioButtonLable ";
import DefaultRadioButton from "../../RadioButton/default";
import languageDictionary from "../../../Functions/getLanguageDictionary";
import ValueToString from "../../../Functions/valueToString";

const SetupLayoutRadioButton = (props) => {
    const {} = props;

    const dictionary = languageDictionary()

    const styles = StyleSheet.create({

    })

    var listItems = {}
    Object.keys(allNumLayouts).map((allNumLayoutsKey) => 
        listItems[allNumLayoutsKey] = <CurrencyRadioButtonLable text={ValueToString(value=10_000.00, layout=allNumLayoutsKey)}/>)

    return(
        <View>
            <DefaultRadioButton list={listItems} selected={props.selected} setSelected={props.setSelected} listItemWidth={275} listItemHeight={40} />
        </View>
    );
}

export default SetupLayoutRadioButton;