import React from "react";
import { StyleSheet, View } from "react-native";
import languageDictionary from "../../Functions/getLanguageDictionary";
import HeadLine from "../Lables/headlins";
import DefaultLabel from "../Lables/default";
import colorPallet from "../../constants/Colors";
import ValueToString from "../../Functions/valueToString";

const ExpendituresInfo = (props) => {
    const dictionary = languageDictionary();

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

    return(
        <View>
            <HeadLine text={dictionary["Expenditures"]} marginTop={30}/>
            
            <View style={styles.parantView}>

                <View style={styles.childView}>
                    <DefaultLabel text={`${dictionary["Current Month"]}:`} textAlign="left" backGround={colorPallet.transperent}/>
                    <DefaultLabel text={ValueToString(props.currentMonthExpenditures)} marginLeft={10} textAlign="left" backGround={colorPallet.transperent}/>
                </View>

                <View style={{marginBottom:5, ...styles.childView}}>
                    <DefaultLabel text={`${dictionary["Average"]}:`} textAlign="left" backGround={colorPallet.transperent}/>
                    <DefaultLabel text={ValueToString(props.avargeExpenditures)} marginLeft={10} textAlign="left" backGround={colorPallet.transperent}/>
                </View>

             </View>
        </View>

    );
}

export default ExpendituresInfo;