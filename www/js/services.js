angular.module('starter.services', [])
.factory('serverData',function($q){
        var eb = new vertx.EventBus('http://www.gouwudai.net.cn:8087/eventbus');
        var listener = $q.defer();
  var fact = {};
    fact.receive = function() {
    return listener.promise;
  };
    eb.onopen = function(){
          eb.registerHandler("wishlists", function(message) {
            listener.notify(message);
        });
    } ;

      return fact;
})
.factory('$localstorage', ['$window', function($window) {
    return {
        set: function(key, value) {
            $window.localStorage[key] = value;
        },
        get: function(key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        setObject: function(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function(key) {
            return JSON.parse($window.localStorage[key] || '{}');
        }
    }
}]);

