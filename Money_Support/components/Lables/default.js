import React from "react";
import {Text, StyleSheet} from 'react-native';

const DefaultLable = props => {

    const {textColor="white", fontSize=20} = props
    
    const styles = StyleSheet.create({
        textStyle: {color:textColor, fontSize:fontSize}
    })

    return (
        <Text style={styles.textStyle}>{props.text}</Text>
    )

    
}


export default DefaultLable