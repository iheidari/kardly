const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {
  let newConfig = config;
  if (env === 'development') {
    newConfig.resolve.alias['react-dom'] = '@hot-loader/react-dom';
  }
  newConfig = rewireReactHotLoader(newConfig, env);
  return newConfig;
};
