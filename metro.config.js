const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  resolver: {
    unstable_enablePackageExports: true,
    extraNodeModules: {
      crypto: require.resolve('expo-crypto'),
      'node:crypto': require.resolve('expo-crypto'),
      'react-native-quick-crypto': require.resolve('expo-crypto'),
      stream: require.resolve('stream-browserify'),
      os: require.resolve('os-browserify'),
      path: require.resolve('path-browserify'),
      net: require.resolve('react-native-tcp-socket'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      'indexeddb': require.resolve('localforage'),
      'indexedDB': require.resolve('localforage'),
    },
  },
};

module.exports = mergeConfig(defaultConfig, customConfig);
