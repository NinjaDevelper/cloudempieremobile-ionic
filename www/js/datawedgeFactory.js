angular.module('ngCordova.plugins.datawedge', [])

  .factory('$cordovaDatawedge', ['$q', function ($q) {

    return {
      scan: function (config) {
        var q = $q.defer();

        cordova.plugins.datawedge.scan(function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        }, config);

        return q.promise;
      },

      encode: function (type, data) {
        var q = $q.defer();
        type = type || 'TEXT_TYPE';

        cordova.plugins.datawedge.encode(type, data, function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        });

        return q.promise;
      }
    };
  }]);