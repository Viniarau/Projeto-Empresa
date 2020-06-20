import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const IS_IOS = Platform.OS === 'ios';
const IS_ANDROID = !IS_IOS;

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;

const LAYOUT = {
  FONTS: {
  },
  COLORS: {
    primary: '#30404E',
    secondary: '#D92827',
    black: '#010101',
    gray: '#666766'
  },
};

export {
  IS_IOS,
  IS_ANDROID,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  IS_IPHONE_X,
  STATUS_BAR_HEIGHT,
  HEADER_HEIGHT,
  LAYOUT,
};
