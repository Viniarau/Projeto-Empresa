import {AppRegistry} from 'react-native';
import App from './src/config/router.config';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
