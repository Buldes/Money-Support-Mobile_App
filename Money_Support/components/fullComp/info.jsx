import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import languageDictionary from "../../Functions/getLanguageDictionary";
import HeadLine from "../Lables/headlins";
import DefaultLabel from "../Lables/default";
import colorPallet from "../../constants/Colors";
import ValueToString from "../../Functions/valueToString";
import { infoLableSettings } from "../../variables/dictionary";

const InfoBox = (props) => {
    const dictionary = languageDictionary();
    const [dataValid, setdataValid] = useState(true)
    const {} = props;

    const styles = StyleSheet.create({
        parantView : {
            backgroundColor:colorPallet.bg_5e,
            marginLeft:5,
            marginRight:5,
            marginTop:5,
            borderRadius:10,
        },
        childView : {
            marginLeft:10,
            marginRight:10,
            marginTop:5,
            alignItems: 'center',
            flexDirection:"row"
        }
    })
    
    useEffect(() => {
        if (isNaN(props.avargeExpenditures)) setdataValid(false);
        else setdataValid(true)
    }, [props.avargeExpenditures])

    return(

        <View>

            {infoLableSettings["avargeExpenditures"] || infoLableSettings["currentExpenditures"] ? 
            <View style={{marginBottom:20}}>
                <HeadLine text={dictionary["Expenditures"]}/>
                <View style={styles.parantView}>
                    {infoLableSettings["currentExpenditures"] ? <View style={styles.childView}>
                        <DefaultLabel text={`${dictionary["Current Month"]}:`} textAlign="left" backGround={colorPallet.transperent} marginBottom={infoLableSettings["avargeExpenditures"] ? 0 : 5}/>
                        <DefaultLabel text={true ? ValueToString(props.currentMonthExpenditures): "--.--"} marginLeft={10} textAlign="left" backGround={colorPallet.transperent} marginBottom={infoLableSettings["avargeExpenditures"] ? 0 : 5}/>
                    </View>: ""}
                    {infoLableSettings["avargeExpenditures"] ? <View style={{marginBottom:5, ...styles.childView}}>
                        <DefaultLabel text={`${dictionary["Average"]}:`} textAlign="left" backGround={colorPallet.transperent}/>
                        <DefaultLabel text={dataValid ? ValueToString(props.avargeExpenditures): "--.--"} marginLeft={10} textAlign="left" backGround={colorPallet.transperent}/>
                    </View>: ""}
                 </View>
            </View> : ""}

            {infoLableSettings["avargeIncome"] || infoLableSettings["currentIncome"] ? 
            <View style={{marginBottom:20}}>
                <HeadLine text={dictionary["Income"]}/>
                <View style={styles.parantView}>
                    {infoLableSettings["currentIncome"] ? <View style={styles.childView}>
                        <DefaultLabel text={`${dictionary["Current Month"]}:`} textAlign="left" backGround={colorPallet.transperent} marginBottom={infoLableSettings["avargeExpenditures"] ? 0 : 5}/>
                        <DefaultLabel text={true ? ValueToString(props.currentMonthIncome): "--.--"} marginLeft={10} textAlign="left" backGround={colorPallet.transperent} marginBottom={infoLableSettings["avargeExpenditures"] ? 0 : 5}/>
                    </View>: ""}
                    {infoLableSettings["avargeIncome"] ? <View style={{marginBottom:5, ...styles.childView}}>
                        <DefaultLabel text={`${dictionary["Average"]}:`} textAlign="left" backGround={colorPallet.transperent}/>
                        <DefaultLabel text={dataValid ? ValueToString(props.avargeIncome): "--.--"} marginLeft={10} textAlign="left" backGround={colorPallet.transperent}/>
                    </View>: ""}
                 </View>
            </View> : ""}

        </View>
    )
    
}

export default InfoBox;