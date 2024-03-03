import React from "react";
import { StyleSheet, View } from "react-native";
import DefaultLabel from "../../Lables/default";
import colorPallet from "../../../constants/Colors";
import languageDictionary from "../../../Functions/getLanguageDictionary";
import { ScrollView } from "react-native-gesture-handler";
import SetupCurrencyRadioButton from "./setupCurrencyRadioButton";
import ValueToString from "../../../Functions/valueToString";

const SetupCurrency = (props) => {
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
        headLine:{
            width:300,
            marginBottom:10,
            height:60,
            borderRadius:40,
            backgroundColor:colorPallet.bg_3e
        },
        scrollView:{
            width:300, 
            height:400, 
            borderRadius:40,
            overflow:"hidden"
        }
    })

    return(
    <View style={styles.container}>
        <View style={styles.headLine}>
            <DefaultLabel text={dictionary["Choose your Currency"]} backGround={colorPallet.transperent} marginTop={5}/>
            <DefaultLabel text={`${props.selected} - ${ValueToString(0.00)}`} backGround={colorPallet.transperent}/>
        </View>

        <View style={[styles.container, {flex:1, overflow:"hidden"}]}>
            <ScrollView alignItems={"center"} style={styles.scrollView}>
                <SetupCurrencyRadioButton  selected={props.selected} setSelected={props.setSelected}/>
            </ScrollView>
        </View>
    </View>
    );
}

export default SetupCurrency;