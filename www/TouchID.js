function TouchID() {
}

TouchID.prototype.isAvailable = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TouchIDEddy", "isAvailable", []);
};

TouchID.prototype.didFingerprintDatabaseChange = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TouchIDEddy", "didFingerprintDatabaseChange", []);
};

TouchID.prototype.verifyFingerprint = function (message, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TouchIDEddy", "verifyFingerprint", [message]);
};

TouchID.prototype.verifyFingerprintWithCustomPasswordFallback = function (message, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TouchIDEddy", "verifyFingerprintWithCustomPasswordFallback", [message]);
};

TouchID.prototype.verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel = function (message, enterPasswordLabel, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TouchIDEddy", "verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel", [message, enterPasswordLabel]);
};

TouchID.prototype.askPassword = function (message, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TouchIDEddy", "askPassword", [message]);
};

TouchID.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.touchid = new TouchID();
  return window.plugins.touchid;
};

cordova.addConstructor(TouchID.install);
