import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import AuthLoadingScreen from '../views/AuthLoadingScreen';
import LoginView from '../views/login';
import WelcomeView from '../views/welcome';
import HomeView from '../views/home';

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  createInitialStack = () => (
    <Stack.Navigator initialRouteName="authLoading">
      <Stack.Screen
        name="authLoading"
        component={AuthLoadingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );

  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="welcome"
        component={WelcomeView}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="authLoading"
        component={AuthLoadingScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="home"
        component={HomeView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );

  render() {
    return <NavigationContainer>{this.createInitialStack(), this.createHomeStack()}</NavigationContainer>;
  }
}

export default App;
