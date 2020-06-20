import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
        <View
        style={{
          backgroundColor: '#000',
          height: 60,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{marginRight: 10}}>
        </View>
        <View>
          <Text style={{color: '#fff'}}>Tecnologia para transformar</Text>
          <Text style={{color: '#fff'}}>www.ivoryit.com.br</Text>
        </View>
      </View>
    );
  }
}