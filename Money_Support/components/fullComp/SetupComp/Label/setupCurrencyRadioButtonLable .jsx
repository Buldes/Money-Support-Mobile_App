import React from "react";
import { StyleSheet, View } from "react-native";
import DefaultLabel from "../../../Lables/default";
import colorPallet from "../../../../constants/Colors";

const CurrencyRadioButtonLable = (props) => {
    const {} = props;

    const styles = StyleSheet.create({

    })

    return(
        <View style={{flexDirection:"row",  alignItems:"center"}}>
            <DefaultLabel text={props.text} backGround={colorPallet.transperent}/>
        </View>
    );
}

export default CurrencyRadioButtonLable;