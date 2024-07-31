module.exports = {
  presets: ['module:@react-native/babel-preset'],
  "plugins": [
    ['react-native-reanimated/plugin'],
    ["@babel/transform-runtime"],
    ["module-resolver", { "alias": { "~": "./src" } }]
  ]
};
