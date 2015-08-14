(function () {
  angular.module('start.service').factory('start.service', ['$q', '$rootScope', startservice]);
  function startservice($q, $rootScope) {
    var options = {
      endpoint: "ws://192.168.1.106:8080/eventbus",
      SocketConstructor: WebSocket
    };
    var ddp = new DDP(options);
    ddp.on("connected", function () {
      console.log("Connected");
    });
  }
})();