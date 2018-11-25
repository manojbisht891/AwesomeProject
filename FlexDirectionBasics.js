import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class FlexDirectionBasics extends Component {
    render() {
        return (
            <View style={{ flex:1, flexDirection:'row' }} >
                <View style={{flex:1, backgroundColor:'skyblue'}} />
                <View style={{flex:2, backgroundColor:'powderblue'}} />
                <View style={{flex:3, backgroundColor:'steelblue', flexDirection:'column', justifyContent:'center', alignItems:'center' }} >
                    <View style={{height:100, width:50, backgroundColor:'red'}} />
                    <View style={{height:100, width:100, backgroundColor:'green'}} />
                    <View style={{height:100, width:120, backgroundColor:'blue'}} />
                </View>
            </View>
        );
    }
}