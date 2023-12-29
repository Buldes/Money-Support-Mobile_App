import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import colorPallet from "../../constants/Colors";
import DefaultLabel from "../Lables/default";
import ValueToString from "../../Functions/valueToString";

const ExpendituresIncomListItem = (props) => {
    const screenWidth = Dimensions.get("window").width

    const {} = props;

    const styles = StyleSheet.create({
        parantView:{
            width:screenWidth - 50,
            height:35,
            backgroundColor:colorPallet.bg_2e,
            borderRadius:10,
            marginTop:5,
            flexDirection:"row"
        }
    })

    var bgColor;
    if (props.status == "Expenditures") {
        bgColor = colorPallet.bg_Rgb_9f2f1f;
    }
    else if (props.status == "Income"){
        bgColor = colorPallet.bg_rGb_2f9f1f;
    }

    return(
        <View style={styles.parantView}>    
            <DefaultLabel text="" width={30} marginLeft={5} marginTop={5} marginBottom={5} backGround={bgColor}/>
            <DefaultLabel text={props.date} width={120} marginLeft={5} marginTop={5} marginBottom={5} backGround={colorPallet.bg_4e}/>
            <DefaultLabel text={ValueToString(props.value)} width={screenWidth-220} marginLeft={5} marginTop={5} marginBottom={5} backGround={colorPallet.bg_4e}/>
        </View>
    );
}

export default ExpendituresIncomListItem;