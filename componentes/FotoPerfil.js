import React from "react";
import {Image} from "react-native";

export default function FotoPerfil({url}){
    return(
        <image
        source={{uri:url}}
        style={{widht:100,height:100, borderRadius:50, marginBottom}}
        />
    );
}