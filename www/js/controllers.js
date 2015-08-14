
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
//$scope.init = function() {
//  alert(1);
//  $scope.eb = new vertx.EventBus("http://192.168.1.106:8080/eventbus");
//  $scope.eb.registerHandler("products-insert", function(message) {
//    alert(message);
//  });
//  alert(2);
//}
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('PlaylistsCtrl', ['$scope', 'serverData', '$localstorage', function($scope,serverData,$localstorage) {
    var xinyuandan =  $localstorage.getObject("post");
        $scope.playlists=[];
        angular.forEach(xinyuandan,function(item,i){
            item.$$hashKey = null;
            $scope.playlists.push(item);
        })
        console.log($scope.playlists);
  // $scope.playlists.concat();

       // console.log($scope.playlists);
      serverData.receive().then(null, null, function(message) {
         //console.log(message);
          var ls = JSON.parse(message);
          //console.log("ls======" + ls);
          $scope.playlists.unshift(ls);
          $localstorage.setObject("post",$scope.playlists);
      });
    }])
.controller('PlaylistCtrl', function($scope, $stateParams) {
      alert($scope.playlists)
      alert($stateParams.id);
});
