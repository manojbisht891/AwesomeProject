import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
    render() {
        return (
            <View style={{height: 300}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
              </View>
        );
    }
}