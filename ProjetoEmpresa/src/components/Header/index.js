import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Platform} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faAngleLeft} from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          paddingTop: Platform.OS == 'ios' ? 15 : 0,
          width: '100%',
          height: Platform.OS == 'ios' ? 70 : 50,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#30404E',
          justifyContent: 'space-between',
          elevation: 5,
        }}>
        <View
          style={{justifyContent: 'center', alignItems: 'center', width: 50}}>
          {this.props.goBack === true ? (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                this.props.actionProps.navigation.goBack();
              }}>
              <FontAwesomeIcon icon={faAngleLeft} size={30} color={'#fff'} />
            </TouchableOpacity>
          ) : this.props.goBack === false ? (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                this.props.actionProps.navigation.toggleDrawer();
              }}>
              <FontAwesomeIcon icon={faBars} size={25} color={'#fff'} />
            </TouchableOpacity>
          ) : null}
        </View>
        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'center',
            }}>
            {this.props.title}
          </Text>
        </View>
        <View style={{width: 50}}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              this.props.goBack === true
                ? null
                : this.props.actionProps.navigation.replace('welcome');
            }}>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
