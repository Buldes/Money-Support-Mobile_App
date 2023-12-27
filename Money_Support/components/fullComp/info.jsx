import React from "react";
import { StyleSheet, View } from "react-native";
import languageDirectory from "../../Functions/getLanguageDirectory";
import HeadLine from "../Lables/headlins";
import DefaultLabel from "../Lables/default";
import colorPallet from "../../constants/Colors";

const ExpendituresInfo = (props) => {
    const directory = languageDirectory();

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
            <HeadLine text={directory["Expenditures"]} marginTop={30}/>
            
            <View style={styles.parantView}>

                <View style={styles.childView}>
                    <DefaultLabel text="Diesen Monat:" textAlign="left" backGround={colorPallet.bg_1f}/>
                    <DefaultLabel text="Diesen Monat:" textAlign="left" backGround={colorPallet.bg_1f}/>
                </View>

                <View style={styles.childView}>
                    <DefaultLabel text="Durchschnitt:" textAlign="left" backGround={colorPallet.bg_1f}/>
                    <DefaultLabel text="Diesen Monat:" textAlign="left" backGround={colorPallet.bg_1f}/>
                </View>

             </View>
        </View>

    );
}

export default ExpendituresInfo;