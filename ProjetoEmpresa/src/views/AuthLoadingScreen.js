import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View,
  AsyncStorage,
  Text,
} from 'react-native';

// import SplashScreen from 'react-native-splash-screen';

// import {IS_IOS, LAYOUT} from '../constants/app.constant';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);

    //Desativar o dimensionamento das fontes no aplicativo.
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
  }

  componentDidMount() {
    this._initialApp();
  }

  isWelcome = async () => {
    return await AsyncStorage.getItem('options');
  };

  _initialApp = async () => {
    this.props.navigation.navigate('Login');
    this.isWelcome().then(options => {
    // this.props.navigation.navigate(
    //   options === 'false' || options === null
    //     ? 'welcome'
    //     : 'home',
    // );
    });
    // SplashScreen.hide();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'#fff'}
          translucent={false}
        />
        <ActivityIndicator size="large" color={'red'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default AuthLoadingScreen;
