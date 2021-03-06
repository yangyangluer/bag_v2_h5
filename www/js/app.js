// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngResource', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

          .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
          })
          .state('app.login', {
            url: '/login',
            views: {
              'menuContent': {
                  templateUrl: 'templates/login/login.html',
                  controller: 'loginCtrl'
              }
            }
          })

          .state('app.register', {
            url: '/register',
            views: {
              'menuContent': {
                  templateUrl: 'templates/login/register.html',
                  controller: 'SignupCtrl'
              }
            }
          })

          .state('app.search', {
            url: '/search',
            views: {
              'menuContent': {
                templateUrl: 'templates/search.html'
              }
            }
          })

          .state('app.browse', {
            url: '/browse',
            views: {
              'menuContent': {
                templateUrl: 'templates/browse.html'
              }
            }
          })


          .state('app.findgoods', {
            url: '/findgoods',
            views: {
              'menuContent': {
                  templateUrl: 'templates/goods/findgoods.html',
                  controller: 'FindGoodsCtrl'
              }
            }
          })
          .state('app.goodslist', {
              url: '/goodslist',
              views: {
                  'menuContent': {
                      //controller: 'GoodslistCtrl',
                      templateUrl: 'templates/goods/goodslist.html'
                  }
              }
          })
          .state('app.customgoods', {
            url: '/customgoods',
            views: {
              'menuContent': {
                  templateUrl: 'templates/goods/customgoods.html',
                  controller: 'CustomGoodsCtrl'
              }
            }
          })
          .state('app.share', {
            url: '/share',
            views: {
              'menuContent': {
                  templateUrl: 'templates/share/share.html',
                  controller: 'ShareCtrl'
              }
            }
          })
          .state('app.wishlistdetails', {
              url: '/wishlistdetails',
              views: {
                  'menuContent': {
                      templateUrl: 'templates/wish/wishlistdetails.html'
                  }
              }
          })

          .state('app.wishlists', {
              url: '/wishlists',
              views: {
                  'menuContent': {
                      templateUrl: 'templates/wish/wishlists.html',
                      controller: 'wishlist'
                  }
              }
          })

          .state('app.remark', {
              url: '/remark',
              views: {
                  'menuContent': {
                      templateUrl: 'templates/wish/remark.html',
                      controller: 'RemarkCtrl'
                  }
              }
          })
          .state('app.iboughthand', {
              url: '/iboughthand',
              views: {
                  'menuContent': {
                      templateUrl: 'templates/personalcenter/iboughthand.html',
                      controller: 'BoughthandCtrl'
                  }
              }
          })
          .state('app.goodsdetails', {
              url: '/goodsdetails',
            views: {
              'menuContent': {
                  controller: 'GoodsdetailsCtrl',
                  templateUrl: 'templates/goods/goodsdetails.html'
              }
            }
          })

          .state('app.contactbuyer', {
              url: '/contactbuyer',
              views: {
                  'menuContent': {
                      templateUrl: 'templates/boughthand/contactbuyer.html',
                      controller: 'ContactbuyerCtrl'
                  }
              }
          })

          .state('app.feedback', {
            url: '/feedback',
            views: {
              'menuContent': {
                  templateUrl: 'templates/set/feedback.html',
                  controller: 'FeedbackCtrl'
              }
            }
          })

          .state('app.changeavatar', {
            url: '/changeavatar',
            views: {
              'menuContent': {
                  templateUrl: 'templates/set/changeavatar.html',
                  controller: 'ChangeAvatarCtrl'
              }
            }
          })

          .state('app.changnickname', {
              url: '/changnickname',
              views: {
                  'menuContent': {
                      templateUrl: 'templates/set/changnickname.html',
                      controller: 'ChangNicknameCtrl'
                  }
              }
          })
          .state('app.changepassword', {
            url: '/changepassword',
            views: {
              'menuContent': {
                  templateUrl: 'templates/set/changepassword.html',
                  controller: 'ChangePasswordCtrl'
              }
            }
          })
          .state('app.set', {
            url: '/set',
            views: {
              'menuContent': {
                  templateUrl: 'templates/personalcenter/set.html',
                  controller: 'SetCtrl'
              }
            }

          })
          .state('app.about', {
            url: '/about',
            views: {
              'menuContent': {
                templateUrl: 'templates/personalcenter/about.html'
              }
            }

          })

          .state('app.history', {
            url: '/history',
            views: {
              'menuContent': {
                  controller: 'HistoryCtrl',
                templateUrl: 'templates/personalcenter/history.html'
              }
            }
          })
          //��Ϣ�б�
          .state('app.messagelist', {
              url: '/messagelist',
              views: {
                  'menuContent': {
                      controller: 'MessagelistCtrl',
                      templateUrl: 'templates/personalcenter/messagelist.html'

                  }
              }
          })

          .state('app.goodsmessage', {
            url: '/goodsmessage',
            views: {
              'menuContent': {
                templateUrl: 'templates/personalcenter/goodsmessage.html'
              }
            }

          })

          .state('app.systemmessage', {
            url: '/systemmessage',
            views: {
              'menuContent': {
                templateUrl: 'templates/personalcenter/systemmessage.html'
              }
            }
          });
        //.state('app.single', {
        //  url: '/playlists/:playlistId',
        //  views: {
        //    'menuContent': {
        //      templateUrl: 'templates/playlist.html',
        //      controller: 'PlaylistCtrl'
        //    }
        //  }
        //});
      // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('app/wishlists');
    });