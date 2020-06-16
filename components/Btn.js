import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {style} from '../styles/style'
export const Btn = (props)=>
    {
        return(
            <View style={style.btn}>
                <Text>{props.num}</Text>
            </View>
        )
    }
