import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import SettingsMenuButton from "../../Buttons/settinsButton";
import colorPallet from "../../../constants/Colors";
import pressColorPallet from "../../../constants/onPressColor";
import CreateNewUserModal from "../../Modals/createUserModal";
import RenameuserModal from "../../Modals/renameUserModal";
import ConfirmModal from "../../Modals/confirmModal";
import { currentuserKey } from "../../../variables/string";
import { ChangeCurrentUserKey, DeleteCurrentUserData } from "../../../Functions/user";
import languageDictionary from "../../../Functions/getLanguageDictionary";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserSettings = (props) => {
    const [createUserModal, setCreateUserModal] = useState(false)
    const [renameUserModal, setRenameUserModal] = useState(false)
    const [resetUserModal, setResetUserModal] = useState(false)
    const [deletUserModal, setDeletUserModal] = useState(false)
    const [allowDeleteUser, setAllowDeleteUser] = useState(false)

    const dictionary = languageDictionary()

    const styles = StyleSheet.create({
        parant:{
            marginHorizontal:10
        }
    })

    const BackToMain = () => {
        setCreateUserModal(false)
        props.BackToMainMenu()
    }

    const ResetUserData = async () => {
        await DeleteCurrentUserData().then(() => {
            setResetUserModal(false)
            BackToMain()
        })
    }

    const DeleteUser = async () => {
        if (!allowDeleteUser) return
        await DeleteCurrentUserData().then(async (success) => {
        
            await ChangeCurrentUserKey().then(() => {
                setDeletUserModal(false)
                BackToMain()
            })
        })
        
        
    }

    const ChekForNumOfUser = async () => {
        await AsyncStorage.getAllKeys().then(async (data) => {
            data = data.filter(item => item != "settings" && item != "currentUser" && item != currentuserKey)
            if (data.length > 0) {
                setAllowDeleteUser(true)
            }
            else{
                setAllowDeleteUser(false)
            }
        })
    }

    useEffect(() => {
        ChekForNumOfUser()
    })

    return(
        <View>
            <View style={styles.parant}>
               <SettingsMenuButton text={dictionary["Create new user"]} onPress={() => setCreateUserModal(true)} icon="user-plus"/>
               <SettingsMenuButton text={dictionary["Rename user"]} onPress={() => setRenameUserModal(true)} icon="pencil"/>
               <SettingsMenuButton text={dictionary["Reset user"]} onPress={() => setResetUserModal(true)} backGround={colorPallet.bg_Rgb_9f2f1f} pressedColor={pressColorPallet.bg_Rgb_9f2f1f} icon="rotate-left" />
               <SettingsMenuButton text={dictionary["Delete user"]} onPress={() => setDeletUserModal(true)}backGround={allowDeleteUser ? colorPallet.bg_Rgb_9f2f1f: colorPallet.bg_4e} textColor={allowDeleteUser ? "white": "grey"} iconColor={allowDeleteUser ? "white": "grey"} pressedColor={pressColorPallet.bg_Rgb_9f2f1f} icon="trash"/>
            </View>

            <CreateNewUserModal isVisible={createUserModal} closeModal={() => setCreateUserModal(false)} allUserKeys={props.allUserKeys} reloadData={BackToMain}/>
            <RenameuserModal isVisible={renameUserModal} closeModal={() => setRenameUserModal(false)} allUserKeys={props.allUserKeys} backtoMain={BackToMain}/>
            <ConfirmModal isVisible={resetUserModal} closeModal={() => setResetUserModal(false)} cancel={() => setResetUserModal(false)} confirmed={ResetUserData} text={`${dictionary["Are you sure you want to RESET the current User?\nUser:"]} "${currentuserKey}"`} headline={dictionary["Reset user"]}/>
            <ConfirmModal isVisible={deletUserModal && allowDeleteUser} closeModal={() => setDeletUserModal(false)} cancel={() => setDeletUserModal(false)} confirmed={DeleteUser} text={`${dictionary["Are you sure you want to DELETE the current User?\nUser:"]} "${currentuserKey}"`} headline={dictionary["Delete user"]}/>
        </View>
    );
}

export default UserSettings;