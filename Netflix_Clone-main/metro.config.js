const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
<<<<<<< HEAD
 * https://reactnative.dev/docs/metro
=======
 * https://facebook.github.io/metro/docs/configuration
>>>>>>> 4651d54 (Initial commit)
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
