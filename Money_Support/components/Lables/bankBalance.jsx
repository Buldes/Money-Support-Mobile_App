import React, { useState, useEffect } from "react";
import DefaultLabel from "./default";
import * as Font from 'expo-font';
import colorPallet from "../../constants/Colors";

const BankBalanceLable = (props) => {
    const { size=200, fontSize=50 } = props;

    // load Font, because it is not a system font
    const [fontLoaded, setFontLoaded] = useState(false);
    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'digital-7': require('../../assets/fonts/digital-7.ttf'),
            });
            setFontLoaded(true);
        }
        loadFont();
    }, []);
    if (!fontLoaded) {
        // font is still loading, retur nothing
        return null
    }

    return(
        <DefaultLabel 
            backGround={colorPallet.bg_3e} width={size} height={size} borderRadius={1000} fontFamily="digital-7" fontSize={fontSize}
            text={props.text} top={props.top} left={props.left}/>
    );
}

export default BankBalanceLable;