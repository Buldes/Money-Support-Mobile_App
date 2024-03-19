import React from "react";
import { StyleSheet, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import colorPallet from "../../constants/Colors";

const DefaultSwitch = (props) => {
    const {enabledColor=colorPallet.bg_rGb_2f9f1f, disabledColor=colorPallet.bg_Rgb_bf1f1f, 
            trackColorEnabled=colorPallet.bg_5e, trackColorDisabled=colorPallet.bg_3e, 
            size=1, touchableWidth=50, touchableHeight=25} = props;

    const styles = StyleSheet.create({

    })

    return(
        <Switch
            trackColor={{false: trackColorDisabled, true: trackColorEnabled}}
            thumbColor={props.isEnabled ? enabledColor : disabledColor}
            ios_backgroundColor="white"
            onValueChange={props.toggleSwitch}
            value={props.isEnabled}
            style={{width:touchableWidth, height:touchableHeight, transform: [{ scaleX: size }, { scaleY: size }]}}
            />
    );
}

export default DefaultSwitch;