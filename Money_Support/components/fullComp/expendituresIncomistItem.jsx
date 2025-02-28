import React from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import colorPallet from "../../constants/Colors";
import DefaultLabel from "../Lables/default";
import ValueToString from "../../Functions/valueToString";
import FontAwsomeIcon from "react-native-vector-icons/FontAwesome"
import EditEntryModal from "../Modals/editEntryModal";

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
    
    // check which color is needed
    var bgColor = colorPallet.bg_4e;
    if (props.status == "Expenditures") {
        bgColor = colorPallet.bg_Rgb_9f2f1f;
    }
    else if (props.status == "Income"){
        bgColor = colorPallet.bg_rGb_2f9f1f;
    }

    return(
        <Pressable style={styles.parantView} onLongPress={() => props.openEditentry(props.dataID)} delayLongPress={1000}>    
            <View style={{backgroundColor:bgColor, width:30, height:25, marginTop:5, marginLeft:5, borderRadius:5}}>
                <FontAwsomeIcon name={`${props.status == "Expenditures" ? "arrow-down": props.status == "Income" ? "arrow-up": "arrow-right"}`} size={20} marginLeft={6} marginTop={2} color={colorPallet.bg_2e}/>
            </View>
            <DefaultLabel text={props.date} width={120} marginLeft={5} marginTop={5} marginBottom={5} backGround={colorPallet.bg_4e}/>
            <DefaultLabel text={`${props.status == "Expenditures" ? "-": props.status == "Income" ? "+": ""}${ValueToString(props.value)}`} width={screenWidth-220} marginLeft={5} marginTop={5} marginBottom={5} backGround={colorPallet.bg_4e}/>
        </Pressable>

    );
}

export default ExpendituresIncomListItem;