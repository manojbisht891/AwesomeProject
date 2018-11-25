import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class PizzaTranslator extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        return (
            <View style={{ flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor:'skyblue' }}>
                <View style={{ backgroundColor:'steelblue',  flex:1, height:200  }}>
                    <TextInput style={{fontSize:25}} placeholder="Type here Translate!" onChangeText={(text) => this.setState({text}) } />
                    <Text style={{ fontSize:42, flex:1 }} >
                        { this.state.text.split(' ').map( (word) => word && '🍕' ).join(' ')  }
                    </Text>
                    <Text style={{ fontSize:20, color:'red', backgroundColor:'green', flex:1 }} >
                        { this.state.text }
                    </Text>
                </View>

            </View>
        );
    }
}