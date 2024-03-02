import React, { useState } from "react";
import { StyleSheet, View, Modal, Dimensions, Vibration, Pressable } from "react-native";
import colorPallet from "../../constants/Colors";
import DefaultLabel from "../Lables/default";
import DefaultInputField from "../inputField/default";
import DefaultButton from "../Buttons/default";
import languageDictionary from "../../Functions/getLanguageDictionary";
import pressColorPallet from "../../constants/onPressColor";
import { currentuserKey, setCurrentUserKey } from "../../variables/string";
import { SaveCurrentUser, SaveCurrentUserKey } from "../../Functions/dataDealer";
import { RenameCurrentUserKey } from "../../Functions/user";

const RenameuserModal = (props) => {
    const [valid, setValid] = useState(null)
    const [invalidError, setInvalidError] = useState("Invalid name")
    const [newName, setNewName] = useState("")

    const screenSize = Dimensions.get("window").width
    const dictionary = languageDictionary()

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
        placeHolder:{
            height:10
        },
        closeModalArea:{
            width:screenSize,
            flex:1
        }
    })

    const CheckValid = (newValue) => {
        setNewName(newValue)
        if (newValue == null || newValue == "") setValid(null)
        else if (newValue.trim() == "") {
            setInvalidError(dictionary["Name must contain letters or numbers"])
            setValid(false)
        }
        else if (newValue == "settings" || newValue == "currentUser"){
            setInvalidError(`"${newValue}" ${dictionary["is not allowed to use, do to storage problems."]}`)
            setValid(false)
        }
        else if (props.allUserKeys.includes(newValue)){
            setValid(false)
            setInvalidError(`"${newValue}" ${dictionary["is already in use."]}`)
        }   
        else setValid(true)
    }

    const HandleRenameUser = async (keyOfUser) => {
        if (valid) {
            await RenameCurrentUserKey(keyOfUser).then(() => {
                props.backtoMain()
            })
        }
    }

    return(
        <Modal transparent={true} visible={props.isVisible} animationType="fade" onRequestClose={props.closeModal}>
            <View style={styles.backGround}>

                <Pressable style={styles.closeModalArea} onPress={props.closeModal}></Pressable>

                <View style={styles.container}>
                    
                    <DefaultLabel text={dictionary["Rename user"]} backGround={colorPallet.bg_4e} borderRadius={20} marginBottom={5} width="100%"/>

                    <DefaultLabel text={`${dictionary["Current name"]}: ${currentuserKey}`} backGround={colorPallet.transperent} fontSize={15} marginBottom={5}/>

                    <DefaultInputField value={newName} onChangeText={(value) => CheckValid(value)} width={screenSize - 40} placeholder={`[${dictionary["Type name here"]}]`} backGround={colorPallet.bg_3e} borderColor={valid ? "green": valid  == false? "red": "black" }/>
                    {valid == null ? "": 
                    valid ? <DefaultLabel text={dictionary["Valid name"]} backGround={colorPallet.transperent} fontSize={10} width={screenSize-45} textAlign="left" textColor={colorPallet.bg_rGb_2f9f1f}/>:
                    !valid ? <DefaultLabel text={`${dictionary["Invalid Name:"]} ${invalidError}`} backGround={colorPallet.transperent} fontSize={10} width={screenSize-45} textAlign="left" textColor={colorPallet.bg_Rgb_bf1f1f}/>: ""}
                    
                    <View style={{width:screenSize - 40, flexDirection:"row", marginTop:20}}> 
                        <DefaultButton text={dictionary["Cancel"]} width={(screenSize-40) / 2 - 5} backGround={colorPallet.bg_Rgb_bf1f1f} onPress={props.closeModal} pressedColor={pressColorPallet.bg_Rgb_bf1f1f} height={30} marginRight={10}/>

                        {valid == null || !valid ? 
                        <DefaultButton text={dictionary["Rename"]} width={(screenSize-40) / 2 - 5} backGround={colorPallet.bg_5e} pressedColor={pressColorPallet.bg_Rgb_bf1f1f}/>:
                        <DefaultButton text={dictionary["Rename"]} width={(screenSize-40) / 2 - 5} backGround={colorPallet.bg_rGb_2f9f1f} onPress={() => HandleRenameUser(newName)} pressedColor={pressColorPallet.bg_rGb_2f9f1f}/>}
                    </View>
                    
                    <View style={styles.placeHolder}></View>

                </View>

                <Pressable style={styles.closeModalArea} onPress={props.closeModal}></Pressable>

            </View>
        </Modal>
    );
}

export default RenameuserModal;