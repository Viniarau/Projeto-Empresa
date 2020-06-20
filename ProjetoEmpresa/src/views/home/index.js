import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
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
        <Header title="HOME" actionProps={this.props} goBack={false} />
        <ScrollView style={{flex: 1}}>
          <View style={{marginHorizontal: 20}}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                this.props.navigation.navigate('reportCrime');
              }}>
              <View
                style={{
                  marginTop: 15,
                  height: 45,
                  backgroundColor: '#D92827',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                }}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
                  Informar Crime
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                this.props.navigation.navigate('consultOccurrences');
              }}>
              <View
                style={{
                  marginTop: 15,
                  height: 45,
                  backgroundColor: '#30404E',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                }}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
                  Consultar Ocorrências
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                this.props.navigation.navigate('policeStation');
              }}>
              <View
                style={{
                  marginTop: 15,
                  height: 45,
                  backgroundColor: '#30404E',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                }}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
                  Delegacias Próximas
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                width: '100%',
                height: 30,
                backgroundColor: '#E0DFE4',
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <Text style={{marginLeft: 20, fontSize: 14, fontWeight: 'bold'}}>Portifólio Operacional</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 15,}}>
          </View>
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

export default Home;
