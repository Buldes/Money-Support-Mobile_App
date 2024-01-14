import React from "react";
import { StyleSheet, View } from "react-native";
import DefaultLabel from "../../../Lables/default";
import colorPallet from "../../../../constants/Colors";
import CountryFlag from "react-native-country-flag"

const LanguagRadioButtonLable = (props) => {
    const {} = props;

    const styles = StyleSheet.create({

    })

    return(
        <View style={{flexDirection:"row",  alignItems:"center"}}>
            <CountryFlag isoCode={props.isoCode} size={20} style={{borderRadius:2, marginLeft:5, marginRight:10}} />
            <DefaultLabel text={props.text} backGround={colorPallet.transperent}/>
        </View>
    );
}

export default LanguagRadioButtonLable;