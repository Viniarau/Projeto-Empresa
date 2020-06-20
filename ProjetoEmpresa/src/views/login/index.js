import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';

import Footer from '../../components/Footer';

// import PrimaryLogo from '../../assets/QS_SEGURANCA_logo1';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import {faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons';

import {SCREEN_HEIGHT} from '../../constants/app.constant';

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_cpf: '',
      user_password: '',
      keep_connected: false,
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
      // if (options === 'true') {
      //   this.props.navigation.navigate('welcome');
      // }
      // else{
      //   this.props.navigation.navigate('home');
      // }
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex: 1}}
      >
      <View
        style={{
          flex: 1,
          width: '100%',
          height: SCREEN_HEIGHT,
          backgroundColor: '#fff',
          justifyContent: 'space-between',
        }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'#fff'}
          translucent={false}
        />
        <ScrollView styles={{flex: 1}}>
          <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
            {/* <PrimaryLogo width="100%" height={hp('30%')} style={{marginTop: 20, marginBottom: '2%'}} /> */}
            <Text
              style={{
                color: '#666766',
                textAlign: 'center',
                fontSize: 12,
                fontWeight: '700',
              }}>
              {'Seja Bem Vindo. \n Insira seus dados para continuar.'}
            </Text>
          </View>
          <View style={{alignItems: 'center', marginHorizontal: 25, marginTop: 5}}>
            <Text
              style={{
                marginBottom: '2%',
                alignSelf: 'flex-start',
                fontSize: 14,
                fontWeight: '700',
                color: '#666766',
              }}>
              CPF:
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderColor: '#666766',
                borderWidth: 1,
                width: '100%',
                borderRadius: 8,
              }}>
              <View
                style={{
                  height: 45,
                  width: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1,
                  borderColor: '#666766',
                }}>
                <FontAwesomeIcon icon={faUser} size={25} color={'#30404E'} />
              </View>
              <TextInput
                keyboardType={'number-pad'}
                style={{
                  height: 45,
                  borderWidth: 0,
                  width: '100%',
                }}
                onChangeText={(text) => this.setState({user_cpf: text})}
                value={this.state.user_cpf}
              />
            </View>
            <Text
              style={{
                marginVertical: '2%',
                alignSelf: 'flex-start',
                fontSize: 14,
                fontWeight: '700',
                color: '#666766',
              }}>
              Senha:
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderColor: '#666766',
                borderWidth: 1,
                width: '100%',
                borderRadius: 8,
              }}>
              <View
                style={{
                  height: 45,
                  width: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1,
                  borderColor: '#666766',
                }}>
                <FontAwesomeIcon icon={faLock} size={25} color={'#30404E'} />
              </View>
              <TextInput
                secureTextEntry={true}
                maxLength={30}
                style={{
                  height: 45,
                  borderWidth: 0,
                  width: '100%',
                }}
                onChangeText={(text) => this.setState({user_password: text})}
                value={this.state.user_password}
              />
            </View>
            <View style={{width: '100%'}}>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '4%',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({keep_connected: !this.state.keep_connected})
                  }>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesomeIcon
                      size={20}
                      icon={
                        this.state.keep_connected ? faCheckSquare : faSquare
                      }
                      color={'#666766'}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        color: '#666766',
                        fontSize: 14,
                      }}>
                      Manter Conectado
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  // Alterarar para navigation.replace para não poder voltar ao login
                  if (this.state.showAgain) {
                    this.props.navigation.replace('welcome');
                  } else {
                    this.props.navigation.replace('home');
                  }
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    height: 45,
                    backgroundColor: '#30404E',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 100,
                  }}>
                  <Text
                    style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
                    ENTRAR
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '3%',
              marginHorizontal: 25,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('register');
              }}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: '#666766',
                }}>
                Criar Conta
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: '#666766',
                }}>
                Esqueceu a senha?
              </Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
      <Footer />
      </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
