import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAgain: true,
    };
  }

  componentDidMount() {
    this.getOptions();
    console.disableYellowBox = true;
  }

  getOptions = async () => {
    let options = await AsyncStorage.getItem('options');
    if (options !== null && options !== '') {
      this.setState({showAgain: JSON.parse(options)});
    }
  };

  saveOptions = async () => {
    await AsyncStorage.setItem('options', JSON.stringify(this.state.showAgain));
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'space-between',
        }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'#30404E'}
          translucent={false}
        />
        <Header title="SEJA BEM-VINDO" actionProps={this.props} />
        <ScrollView style={{flex: 1}}>
          <View style={{marginHorizontal: 25}}>
            <Text style={{textAlign: 'center', color: '#666766', fontSize: 14}}>
              {
                "Lero Lero Lero Lero."
              }
            </Text>
          </View>
          <View>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              marginHorizontal: 25,
              borderColor: '#D7D7D7',
            }}>
            <View
              style={{
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({showAgain: !this.state.showAgain})
                }>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesomeIcon
                    size={25}
                    icon={this.state.showAgain ? faSquare : faCheckSquare}
                    color={'#666766'}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      color: '#666766',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    NÃO EXIBIR NOVAMENTE
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                this.saveOptions();
                this.props.navigation.navigate('home');
              }}>
              <View
                style={{
                  height: 45,
                  backgroundColor: '#30404E',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                }}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
                  CONTINUAR PARA O APLICATIVO
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

export default Welcome;
