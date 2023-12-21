import React from "react";
import { StyleSheet, View } from "react-native";
import DefaultLabel from "./default";

const BankBalanceLable = (props) => {
    const {} = props;

    const styles = StyleSheet.create({

    })

    return(
        <DefaultLabel text={props.text}/>
    );
}

export default BankBalanceLable;