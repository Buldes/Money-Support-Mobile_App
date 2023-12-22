import React from "react";
import DefaultLable from "./default";
import { Dimensions } from "react-native";

const HeadLine = (props) => {
    const { spaceBetween=20, width=Dimensions.get("window").width - spaceBetween} = props;

    return(
        <DefaultLable text={props.text} width={width} height={props.height} borderRadius={100} fontSize={22}
                        top={props.top} left={props.left} marginLeft={props.marginLeft} marginTop={props.marginTop} />
    );
}

export default HeadLine;