import React from "react";
import { Dimensions, Modal, Pressable, StyleSheet, View } from "react-native";
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import DefaultLabel from "../Lables/default";
import colorPallet from "../../constants/Colors";
import DefaultButton from "../Buttons/default";
import pressColorPallet from "../../constants/onPressColor";

const ChangeUserModal = (props) => {
    const keys = props.keys

    const screenSize = Dimensions.get("window").width

    const {} = props;

    const styles = StyleSheet.create({
        backGround:{
            flex:1,
            backgroundColor:"#000000aa",
            alignItems:"center",
            justifyContent:"flex-end"
        },
        container:{
            width:screenSize - 20,
            borderRadius:20,
            backgroundColor:colorPallet.bg_2e,
            height: keys.length <= 7 ? null: 340,
            overflow:"hidden"
        },
        downExit:{
            width:screenSize,
            height:50,
            backgroundColor:colorPallet.transperent
        },
        upExit:{
            width:screenSize,
            flex:1,
            backgroundColor:colorPallet.transperent
        }
    })

    return(
        <Modal transparent={true} visible={props.isVisible} animationType="fade" onRequestClose={props.closeModal}>
            <View style={styles.backGround}>
    
                <Pressable onPress={props.closeModal} style={styles.upExit}></Pressable>

                <View style={[styles.container, {alignItems:"center"}]}>
                    <ScrollView alignItems="center" style={[styles.container, {marginBottom:0}]} >

                        {keys.map((value, index) => <DefaultButton backGround={colorPallet.bg_3e} pressedColor={colorPallet.bg_4e} text={value} key={index} height={35} width={screenSize - 30} marginTop={5} />)}
                    </ScrollView>
                    
                    <DefaultButton text={"Create new User"} backGround={colorPallet.bg_rGb_2f9f1f} pressedColor={pressColorPallet.bg_rGb_2f9f1f} height={35} width={screenSize - 30} marginBottom={5} marginTop={10} />
                
                </View>

                <Pressable onPress={props.closeModal} style={styles.downExit}></Pressable>

            </View>
        </Modal>
    );
}

export default ChangeUserModal;