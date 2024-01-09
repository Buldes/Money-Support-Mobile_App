import React from "react";
import { Dimensions, Modal, StyleSheet, View } from "react-native";
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import DefaultLabel from "../Lables/default";
import colorPallet from "../../constants/Colors";
import DefaultButton from "../Buttons/default";
import pressColorPallet from "../../constants/onPressColor";

const ChangeUserModal = (props) => {
    const keys = ["Test #1", "Test #2", "Test # 3", "Test # 4", "Test # 5", "Test # 5"]

    const screenSize = Dimensions.get("window").width
    const screenHight = Dimensions.get("window").height

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
            marginBottom:50,
            height: keys.length <= 7 ? null: 340,
            overflow:"hidden"
        }
    })

    return(
        <Modal transparent={true} visible={props.isVisible} animationType="fade" onRequestClose={props.closeModal}>
            <View style={styles.backGround}>
                <View style={styles.container}>
                    <ScrollView alignItems="center" style={[styles.container, {marginBottom:0}]} >

                        {keys.map((value, index) => <DefaultButton backGround={colorPallet.bg_3e} pressedColor={colorPallet.bg_4e} text={value} key={index} height={35} width={screenSize - 30} marginTop={5} />)}
                        <DefaultButton text={"Create new User"} backGround={colorPallet.bg_rGb_2f9f1f} pressedColor={pressColorPallet.bg_rGb_2f9f1f} height={35} width={screenSize - 30} marginBottom={5} marginTop={20} />
                    </ScrollView>
                </View>

            </View>
        </Modal>
    );
}

export default ChangeUserModal;