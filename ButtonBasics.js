import React, { Component } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

export default class ButtonBasics extends Component {

    constructor(props) {
        super(props);
        this.state = {color:'green'};
    }

    render() {
        return (
            <View style={{ flex:1, backgroundColor:'skyblue', justifyContent:'center' }}>
                <TextInput onSubmitEditing={ ( event ) => this.setState({ color: event.nativeEvent.text })  } placeholder="Type Color" />
                <Text style={{ backgroundColor:this.state.color, height: 20 }}> Color Is: {this.state.color} </Text>
            </View>
        );
    }

}