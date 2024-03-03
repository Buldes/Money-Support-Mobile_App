import React, { useEffect, useState } from "react";
import { Dimensions, Modal, StyleSheet, View } from "react-native";
import SettingsMenuButton from "../../Buttons/settinsButton";
import SetupLanguage from "../SetupComp/setupLanguage";
import { SetNumLayout, currency, language, numLayout, setCurrency, setLanguage } from "../../../variables/string";
import DefaultButton from "../../Buttons/default";
import languageDictionary from "../../../Functions/getLanguageDictionary";
import colorPallet from "../../../constants/Colors";
import pressColorPallet from "../../../constants/onPressColor";
import { SaveSettings } from "../../../Functions/dataDealer";
import SetupCurrency from "../SetupComp/setupCurrency";
import SetupLayout from "../SetupComp/setupLayout";

const PersonalizeSettings = (props) => {
    const [activeModal, setActiveModal] = useState(null)
    const [selectedLanguage, setSelectedLanguage] = useState(language)
    const [selectedCurrency, setSelectedCurrency] = useState(currency)
    const [selectedLayout, setSelectedLayout] = useState(numLayout)

    setLanguage(selectedLanguage)
    setCurrency(selectedCurrency)
    SetNumLayout(selectedLayout)

    const dictionary = languageDictionary()
    const screenSize = Dimensions.get("window").width

    useEffect(() => {
        props.ReloadChanges()
    }, [selectedLanguage])

    const styles = StyleSheet.create({
        child:{
            marginHorizontal:10
        },
        modalBackground:{
            flex:1,
            backgroundColor:"#000000aa",
            alignItems:"center",
            justifyContent:"center"

        }
    })

    const ConfirmPressed = async () => {
        await SaveSettings().then(() => {
            setActiveModal(null)
            props.ReloadChanges()
        })
    }

    return(
        <View>
            <View style={styles.child}>
                <SettingsMenuButton text={dictionary["Change language"]} icon="language" onPress={() => setActiveModal("language")}/>
                <SettingsMenuButton text={dictionary["Change currency"]} icon="dollar" onPress={() => setActiveModal("currency")}/>
                <SettingsMenuButton text={dictionary["Change layout"]} icon="numeric"  onPress={() => setActiveModal("layout")} useMaterialCommunityIcons/>
            </View>

            <Modal transparent={true} visible={activeModal != null} animationType="fade" onRequestClose={() => setActiveModal(null)}>
                <View style={styles.modalBackground}>
                    {activeModal == "language" ? <SetupLanguage selected={selectedLanguage} setSelected={setSelectedLanguage}/>: 
                    activeModal == "currency" ? <SetupCurrency selected={selectedCurrency} setSelected={setSelectedCurrency}/>: 
                    activeModal == "layout" ? <SetupLayout selected={selectedLayout} setSelected={setSelectedLayout}/> : ""}

                    <DefaultButton onPress={ConfirmPressed} text={dictionary["Confirm"]} width={screenSize-80} marginTop={20} height={35} backGround={colorPallet.bg_rGb_2f9f1f} pressedColor={pressColorPallet.bg_rGb_2f9f1f}/>
                </View>
            </Modal>

        </View>
    );
}

export default PersonalizeSettings;