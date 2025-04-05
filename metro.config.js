// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const { withNativeWind } = require('nativewind/metro');

// 1. Get base Expo config
const expoConfig = getDefaultConfig(__dirname);

// 2. Add SVG transformer configuration
expoConfig.transformer = {
  ...expoConfig.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer")
};

expoConfig.resolver = {
  ...expoConfig.resolver,
  assetExts: expoConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...expoConfig.resolver.sourceExts, "svg", "cjs"]
};

// 3. Wrap with Reanimated
const reanimatedConfig = wrapWithReanimatedMetroConfig(expoConfig);

// 4. Wrap with NativeWind
const nativeWindConfig = withNativeWind(reanimatedConfig, {
  input: 'app/global.css',
});

module.exports = nativeWindConfig;