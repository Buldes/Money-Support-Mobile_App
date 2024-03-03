import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import colorPallet from "../../../constants/Colors";
import DefaultLabel from "../../Lables/default";

const SettingsContainerLayout = (props) => { 
    const screenSize = Dimensions.get("window").width

    const styles = StyleSheet.create({
        container:{
            borderRadius:10,
            backgroundColor:colorPallet.bg_1a,
            width:screenSize - 10,
            marginBottom:30,
        },
        headline:{
            borderRadius:10,
            backgroundColor:colorPallet.bg_1f,
            width:screenSize - 10,
            height:30,
            borderBottomColor:colorPallet.white,
            borderBottomWidth:2,
            borderBottomLeftRadius:0,
            borderBottomRightRadius:0
        },
        child:{
            marginTop:10,
            marginBottom:10
        }
    })

    return(
        <View style={styles.container}>
            
            <View style={styles.headline}>
                <DefaultLabel backGround={colorPallet.transperent} text={props.headline}/>
            </View>

            <View style={styles.child}>
                {props.comp}
            </View>
            
        </View>
    );
}

export default SettingsContainerLayout;