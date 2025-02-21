// shim.js
import 'react-native-url-polyfill/auto';

if (typeof global.setImmediate === 'undefined') {
    global.setImmediate = function(callback, ...args) {
      return setTimeout(callback, 0, ...args);
    };
  }
  if (typeof global.clearImmediate === 'undefined') {
    global.clearImmediate = function(handle) {
      return clearTimeout(handle);
    };
  }
  