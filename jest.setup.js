import { NativeModules } from 'react-native';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon')


NativeModules.SettingsManager = {
  settings: jest.fn()
};

NativeModules.AsyncStorage = jest.fn();