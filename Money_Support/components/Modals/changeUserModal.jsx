import React from "react";
import { Dimensions, Modal, Pressable, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colorPallet from "../../constants/Colors";
import DefaultButton from "../Buttons/default";
import pressColorPallet from "../../constants/onPressColor";
import { currentuserKey, setCurrentUserKey } from "../../variables/string";
import { SaveCurrentUser, SaveCurrentUserKey } from "../../Functions/dataDealer";
import FontAwsomeIcon from "react-native-vector-icons/FontAwesome"
import DefaultLabel from "../Lables/default";
import languageDictionary from "../../Functions/getLanguageDictionary";

const ChangeUserModal = (props) => {
    const keys = props.keys

    const screenSize = Dimensions.get("window").width
    const dictionary = languageDictionary()

    const {} = props;
    const selectedIcon = "circle"
    const selectedIconSize = 10

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
            height: keys.length <= 7 ? null: 350,
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
        },
        selectedUserView:{
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
        }
    })

    const HanldeOnPress = async (keyOfUser) => {
        setCurrentUserKey(keyOfUser)
        SaveCurrentUserKey().then(() => {
            props.reloadData(keyOfUser)
        })
    }

    const HandleCreatUserPress = () =>{
        props.closeModal()
        props.openCreateUser()
    }

    return(
        <Modal transparent={true} visible={props.isVisible} animationType="fade" onRequestClose={props.closeModal}>
            <View style={styles.backGround}>
    
                <Pressable onPress={props.closeModal} style={styles.upExit}></Pressable>

                <View style={[styles.container, {alignItems:"center"}]}>
                    <ScrollView alignItems="center" style={[styles.container, {marginBottom:0}]} >

                        {keys.map((value, index) => 
                            value != currentuserKey ? <DefaultButton onPress={() => HanldeOnPress(value)} backGround={colorPallet.bg_3e} pressedColor={colorPallet.bg_4e} text={value} key={index} height={35} width={screenSize - 30} marginTop={5} />
                            : <DefaultButton onPress={props.closeModal} backGround={colorPallet.bg_4e} pressedColor={colorPallet.bg_5e} text={<View style={styles.selectedUserView}><FontAwsomeIcon name={selectedIcon} size={selectedIconSize} color={colorPallet.white}/><DefaultLabel text={value} marginLeft={5} marginRight={5} backGround={colorPallet.transperent}/><FontAwsomeIcon name={selectedIcon} size={selectedIconSize} color={colorPallet.white}/></View>} key={index} height={35} width={screenSize - 30} marginTop={5} />
                            )}
                    </ScrollView>
                    
                    <DefaultButton onPress={() => HandleCreatUserPress()} text={dictionary["Create new user"]} backGround={colorPallet.bg_rGb_2f9f1f} pressedColor={pressColorPallet.bg_rGb_2f9f1f} height={35} width={screenSize - 30} marginBottom={5} marginTop={10} />
                
                </View>

                <Pressable onPress={props.closeModal} style={styles.downExit}></Pressable>

            </View>
        </Modal>
    );
}

export default ChangeUserModal;