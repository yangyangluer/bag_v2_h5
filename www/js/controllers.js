
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
        $ionicModal.fromTemplateUrl('templates/share/model.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
        $scope.closeModel = function () {
    $scope.modal.hide();
  };

  // Open the login modal
        $scope.openModel = function () {
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
    .controller('wishlist', ['$scope', 'serverData', '$localstorage', function ($scope, serverData, $localstorage) {

        var xinyuandan = $localstorage.getObject("wishlist");
        //var xinyuandan = window.tempdata;
        $scope.wishlist = [];
        angular.forEach(xinyuandan,function(item,i){
            item.$$hashKey = null;
            $scope.wishlist.push(item);
        });
        console.log($scope.wishlist);
  // $scope.playlists.concat();

       // console.log($scope.playlists);
      serverData.receive().then(null, null, function(message) {
         //console.log(message);
          var ls = JSON.parse(message);
          //console.log("ls======" + ls);
          $scope.wishlist.unshift(ls);
          $localstorage.setObject("wishlist", $scope.wishlist);
      });
    }])

    .controller('ShareCtrl', function ($scope, $ionicModal) {
        $ionicModal.fromTemplateUrl('templates/share/model.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function () {
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        //当我们用到模型时，清除它！
        //$scope.$on('$destroy', function() {
        //    $scope.modal.remove();
        //});
        //// 当隐藏的模型时执行动作
        //$scope.$on('modal.hide', function() {
        //    // 执行动作
        //});
        //// 当移动模型时执行动作
        //$scope.$on('modal.removed', function() {
        //    // 执行动作
        //});
    })
    //个人中心
    .controller('PersonalCenterCtrl', function ($scope) {
        //获取用户信息
        //安全退出

    })
    //反馈
    .controller('FeedbackCtrl', function ($scope, $ionicModal) {
        //提交
    })
    //设置
    .controller('SetCtrl', function ($scope, $ionicModal) {
        $ionicModal.fromTemplateUrl('templates/set/feedback.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.closefeed = function () {
            $scope.modal.hide();
        };

        // Open the feedback modal
        $scope.openfeed = function () {
            $scope.modal.show();
        };
    })
    //他人的购物袋
    .controller('HisshopingbagsCtrl', function ($scope) {

    })
    //修改图片
    .controller('ChangeAvatarCtrl', function ($scope) {

    })
    //修改密码
    .controller('ChangePasswordCtrl', function ($scope) {

    })
    //修改昵称
    .controller('ChangNicknameCtrl', function ($scope) {
        //修改昵称
    })
    //历史记录
    .controller('HistoryCtrl', function ($scope) {

    })
    //消息列表
    .controller('MessagelistCtrl', function ($scope) {

    })
    //我是买手
    .controller('BoughthandCtrl', function ($scope, $ionicModal) {
        $ionicModal.fromTemplateUrl('templates/boughthand/contactbuyer.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.closeContact = function () {
            $scope.modal.hide();
        };

        // Open the feedback modal
        $scope.openContact = function () {
            $scope.modal.show();
        };
    })
    //联系买家
    .controller('ContactbuyerCtrl', function ($scope) {
        //发送
    })

    //商品列表
    .controller('GoodslistCtrl', function ($scope) {

    })
    //发现商品
    .controller('FindGoodsCtrl', function ($scope) {
        //搜索方法
    })
//商品详细信息
    .controller('GoodsdetailsCtrl', function ($scope) {
        //加入心愿单方法

    });
