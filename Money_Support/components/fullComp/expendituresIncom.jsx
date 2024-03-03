import React from "react";
import { Dimensions, StyleSheet, ToastAndroid, View } from "react-native";
import colorPallet from "../../constants/Colors";
import HeadLine from "../Lables/headlins";
import ExpendituresIncomListItem from "./expendituresIncomistItem";
import { ScrollView } from "react-native-gesture-handler";
import DefaultButton from "../Buttons/default";
import DefaultLabel from "../Lables/default";
import languageDictionary from "../../Functions/getLanguageDictionary";

const ExpendituresIncomComp = (props) => {
    const dictionary = languageDictionary()
    const screenWidth = Dimensions.get("window").width
    
    const {} = props;

    const styles = StyleSheet.create({
        parentView: {
            width: screenWidth - 40,
            height: 500,
            marginTop:30,
            marginBottom:30,
            backgroundColor:colorPallet.bg_3e,
            borderRadius:20,
            //borderColor:"black",
            //borderWidth:2,
            alignItems:"center",
            overflow:"hidden"
        }, 

        listView: {
            height:510,
            borderRadius:20,
            width: screenWidth - 44,
            backgroundColor:colorPallet.bg_3e,
            marginTop:0,
            position:"absolute",
            zIndex:1
        }
    })

    return(
        <View style={styles.parentView}>
            <HeadLine text={dictionary["Entries"]} width={screenWidth - 40} marginTop={0} add={{/*borderColor:"black", borderWidth:2, */position:'absolute',zIndex:2}}/>

            <DefaultButton onPress={props.onPress} text={dictionary["New Entry"]} width={150} height={30} backGround={colorPallet.bg_rgB_134ab0} marginTop={460} left={screenWidth-199} add={{position:'absolute',zIndex:2}}/>

            <ScrollView borderRadius={20} alignItems={"center"} style={styles.listView}>
                <DefaultLabel text="" backGround={colorPallet.transperent} marginBottom={10}/>
                {props.listItems}
                <DefaultLabel text="" backGround={colorPallet.transperent} marginBottom={10}/>
            </ScrollView>

            

        </View>
    );
}

export default ExpendituresIncomComp;