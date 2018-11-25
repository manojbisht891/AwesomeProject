import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

export default class ScrollDown extends Component {

    render() {
        return (
            <View>
                <ScrollView>
                    <Text style={{fontSize:95}} > Scrolliung Down JS for Scrolling</Text>
                    <Text style={{fontSize:95}} > Scrolliung Down JS for Scrolling</Text>
                    <Text style={{fontSize:95}} > Scrolliung Down JS for Scrolling</Text>
                </ScrollView>
            </View>
        );
    }
}