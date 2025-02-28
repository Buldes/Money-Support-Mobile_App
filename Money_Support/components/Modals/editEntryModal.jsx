import React, { useEffect, useState } from "react";
import { StyleSheet, View, Modal, Dimensions, Pressable } from "react-native";
import colorPallet from "../../constants/Colors";
import DefaultLabel from "../Lables/default";
import DefaultButton from "../Buttons/default";
import DefaulDropBox from "../dropDown.jsx/default";
import languageDictionary from "../../Functions/getLanguageDictionary";
import FontAwsomeIcon from "react-native-vector-icons/FontAwesome"
import DefaultInputField from "../inputField/default";
import pressColorPallet from "../../constants/onPressColor";
import { changeOnID, deletOnID } from "../../Functions/currentUserDataDealer";

const EditEntryModal = (props) => {
    const screenSize = Dimensions.get("window").width
    const dictionary = languageDictionary()

    const {} = props;

    if (props.data === undefined) return

    const [state, setState] = useState(props.data.state);
    const [items, setItems] = useState([
      {label: dictionary['Expenditures'], value: 'Expenditures'},
      {label: dictionary['Income'], value: 'Income'}
    ]);
    const [amount, setAmount] = useState(parseFloat(props.data.amount));

    // styles
    const styles = StyleSheet.create({
        backGroundView:{
            flex:1,
            backgroundColor:"#000000aa",
            alignItems:"center",
            justifyContent:"center"
        },
        parantView:{
            width:screenSize - 30,
            height:325,
            backgroundColor:colorPallet.bg_2e,
            borderRadius:20,
            alignItems:"center"
        },
        segment:{
            backgroundColor:colorPallet.bg_3e,
            width:screenSize-40,
            height:45,
            borderRadius:10,
            flexDirection:"row",
            marginTop:10
        },
        exitArea:{
            flex:1,
            width:screenSize,
        }
    })

    useEffect(() => {
        setState(props.data.state != "Stay" ? props.data.state: "Income");
        setAmount(props.data.amount);
    }, [props.isVisible])

    const editClick = () => {
        // check for valid amount input

        console.log(`Edit Entry-ID ${props.data.id}`)
        changeOnID(props.data.id, state, parseFloat(amount))
        props.closePress()
        props.reloadData()
    }

    const deletClick = (id) => {
        console.log(`Delete Entry-ID ${id}`)
        deletOnID(id)
        props.closePress()
        props.reloadData()
    }


    return(
        <Modal transparent={true} visible={props.isVisible} animationType="fade" onRequestClose={props.closePress}>
            <View style={styles.backGroundView}>
                <Pressable style={styles.exitArea} onPress={props.closePress}/>
                <View style={styles.parantView}>

                    <DefaultLabel text={dictionary["Edit Entry"]} backGround={colorPallet.bg_4e} borderRadius={20} height={40} marginBottom={10} width="100%"/>

                    <View style={{zIndex:100, ...styles.segment}}> 
                        <View style={{backgroundColor:state == "Expenditures" ? colorPallet.bg_Rgb_9f2f1f: state == "Income" ? colorPallet.bg_rGb_2f9f1f: colorPallet.bg_2e, width:35, height:35, marginTop:5, marginLeft:5, borderRadius:10}}>
                            <FontAwsomeIcon name={`${state == "Expenditures" ? "arrow-down": state == "Income" ? "arrow-up": "arrow-right"}`} size={25} marginLeft={6} marginTop={5} color={colorPallet.bg_2e}/>
                        </View>  
                        <DefaulDropBox marginLeft={10} marginTop={3} width={screenSize-85} value={state} setValue={setState} items={items} setItems={setItems} backGround={""}/>
                    </View>

                    <View style={{zIndex:1, ...styles.segment}}> 
                        <DefaultInputField defaultValue={`${amount}`} value={amount}  onChangeText={setAmount} width={screenSize-40} type="decimal-pad" placeholder={`[${dictionary["type amount here"]}]`} fontFamily="digital-7" fontSize={22}/>
                    </View>

                    <View style={{width:screenSize - 40, flexDirection:"colum", marginTop:10}}> 
                        <DefaultButton text={dictionary["Edit"]} width={(screenSize-40)} backGround={colorPallet.bg_rGb_2f9f1f} onPress={editClick} pressedColor={pressColorPallet.bg_rGb_2f9f1f} height={40} marginTop={10}/>
                        <DefaultButton text={dictionary["Cancel"]} width={(screenSize-40)} backGround={colorPallet.bg_Rgb_bf1f1f} onPress={props.closePress} pressedColor={pressColorPallet.bg_Rgb_bf1f1f} height={40} marginTop={10}/>
                        <DefaultButton text={dictionary["Delete"]} width={(screenSize-40)} backGround={colorPallet.bg_Rgb_9f2f1f} onPress={() => deletClick(props.data.id)} pressedColor={pressColorPallet.bg_Rgb_9f2f1f} height={40} marginTop={10}/>
                    </View>

                </View>
                <Pressable style={styles.exitArea} onPress={props.closePress}></Pressable>
            </View>
        </Modal>
    );
}

export default EditEntryModal;