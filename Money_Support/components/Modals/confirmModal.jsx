import React from "react";
import { Dimensions, Modal, Pressable, StyleSheet, View } from "react-native";
import colorPallet from "../../constants/Colors";
import DefaultLabel from "../Lables/default";
import pressColorPallet from "../../constants/onPressColor";
import DefaultButton from "../Buttons/default";
import languageDictionary from "../../Functions/getLanguageDictionary";

const ConfirmModal = (props) => {
    const screenSize = Dimensions.get("window").width
    const dictionary = languageDictionary()
    const {} = props;

    const styles = StyleSheet.create({
        backGround:{
            flex:1,
            backgroundColor:"#000000aa",
            alignItems:"center",
            justifyContent:"center"
        },
        container:{
            width:screenSize - 30,
            backgroundColor:colorPallet.bg_2e,
            borderRadius:20,
            alignItems:"center"
        },
        exitArea:{
            flex:1,
            width:screenSize
        }
    })

    return(
        <Modal transparent={true} visible={props.isVisible} animationType="fade" onRequestClose={props.closeModal}>
            <View style={styles.backGround}>

                <Pressable style={styles.exitArea} onPress={props.closeModal}></Pressable>

                <View style={styles.container}>
                    <DefaultLabel text={props.headline} backGround={colorPallet.bg_4e} borderRadius={20} marginBottom={10} width="100%"/>

                    <DefaultLabel text={props.text} backGround={colorPallet.transperent} fontSize={18} width={screenSize-50} marginBottom={10}/>

                    <View style={{width:screenSize - 40, flexDirection:"row", marginBottom:10}}> 
                        <DefaultButton text={dictionary["Cancel"]} width={(screenSize-40) / 2 - 5} backGround={colorPallet.bg_Rgb_bf1f1f} onPress={props.cancel} pressedColor={pressColorPallet.bg_Rgb_bf1f1f} height={30} marginRight={10}/>
                        <DefaultButton text={dictionary["Confirm"]} width={(screenSize-40) / 2 - 5} backGround={colorPallet.bg_rGb_2f9f1f} onPress={props.confirmed} pressedColor={pressColorPallet.bg_rGb_2f9f1f}/>
                    </View>

                </View>

                <Pressable style={styles.exitArea} onPress={props.closeModal}></Pressable>

            </View>
        </Modal>
    );
}

export default ConfirmModal;