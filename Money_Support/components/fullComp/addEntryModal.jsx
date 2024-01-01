import React from "react";
import { StyleSheet, View, Modal, Dimensions } from "react-native";
import colorPallet from "../../constants/Colors";
import DefaultLabel from "../Lables/default";
import DefaultButton from "../Buttons/default";

const AddEntryModal = (props) => {
    const screenSize = Dimensions.get("window").width

    const {} = props;

    const styles = StyleSheet.create({
        backGroundView:{
            flex:1,
            backgroundColor:"#000000aa",
            alignItems:"center",
            justifyContent:"center"
        },
        parantView:{
            width:screenSize - 30,
            height:200,
            backgroundColor:colorPallet.bg_2e,
            borderRadius:20,
            alignItems:"center"
        },
        segment:{
            backgroundColor:colorPallet.bg_3e,
            width:screenSize-40,
            height:35,
            borderRadius:10,
            flexDirection:"row",
            marginTop:10
        }
    })

    return(
        <Modal transparent={true} visible={props.isVisible} animationType="fade">
            <View style={styles.backGroundView}>
                <View style={styles.parantView}>

                    <DefaultLabel text="Add new Entry" borderRadius={20} marginBottom={10} width="100%"/>

                    <View style={styles.segment}> 
                        <DefaultLabel text="Type:" borderRadius={20} marginLeft={10} backGround={colorPallet.transperent}/>  
                    </View>

                    <View style={styles.segment}> 
                        <DefaultLabel text="Amount:" borderRadius={20} marginLeft={10} backGround={colorPallet.transperent}/>  
                    </View>

                    <View style={{width:screenSize - 40, flexDirection:"row", marginTop:20}}> 
                        <DefaultButton text="Cancel" width={(screenSize-40) / 2 - 5} marginRight={10} backGround={colorPallet.bg_Rgb_bf1f1f} onPress={props.closePress}/>
                        <DefaultButton text="Create" width={(screenSize-40) / 2 - 5} backGround={colorPallet.bg_rGb_2f9f1f}/>
                    </View>

                </View>
            </View>
        </Modal>
    );
}

export default AddEntryModal;