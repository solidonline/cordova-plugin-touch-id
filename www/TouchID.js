function TouchIDEddy() {
}

TouchIDEddy.prototype.isAvailable = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TouchIDEddy", "isAvailable", []);
};

TouchIDEddy.prototype.didFingerprintDatabaseChange = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TouchIDEddy", "didFingerprintDatabaseChange", []);
};

TouchIDEddy.prototype.verifyFingerprint = function (message, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TouchIDEddy", "verifyFingerprint", [message]);
};

TouchIDEddy.prototype.verifyFingerprintWithCustomPasswordFallback = function (message, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TouchIDEddy", "verifyFingerprintWithCustomPasswordFallback", [message]);
};

TouchIDEddy.prototype.verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel = function (message, enterPasswordLabel, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TouchIDEddy", "verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel", [message, enterPasswordLabel]);
};

TouchIDEddy.prototype.askPassword = function (message, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TouchIDEddy", "askPassword", [message]);
};

TouchIDEddy.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.touchidEddy = new TouchIDEddy();
  return window.plugins.touchidEddy;
};

cordova.addConstructor(TouchIDEddy.install);
