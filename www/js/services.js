angular.module('starter.services', [])
    .factory('serverData', function ($q) {
        var eb = new vertx.EventBus('http://www.gouwudai.net.cn:8087/eventbus');
        var listener = $q.defer();
        var fact = {};
        fact.receive = function () {
            return listener.promise;
        };
        eb.onopen = function () {
            eb.registerHandler("wishlists", function (message) {
                listener.notify(message);
            });
        };

        return fact;
    })
    .factory('$localstorage', ['$window', function ($window) {
        return {
            set: function (key, value) {
                $window.localStorage[key] = value;
            },
            get: function (key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function (key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }
        }
    }])
    .factory('Host', function ($http, $timeout) {
        var host = window.location.host;
        var pc = false;// For Test
        if (host) {
            host = host.substr(0, host.indexOf(":"));
            host = "192.168.1.111";
            host = "http://" + host + ":8080";
            //host='http://www.gouwudai.net.cn/';
            pc = true;
        } else {
//		host = "192.168.0.101";
            host = "192.168.12.101";
            // host = "10.0.0.57";
            host = "172.20.10.2";
            host = "www.gouwudai.net.cn";
            host = "http://" + host + ":8686";
            pc = false;
        }

        var server = {
            Live: "none",
            isLive: function () {
                return this.Live == "live";
            }
        };

        var tryConnection = function () {
            $http.get(host + '/live').then(function (resp) {
                if (200 <= resp.status && resp.status < 300) {
                    angular.extend(server, resp.data);
                } else {
                    server.Live = "error";
                    server.Msg = "当前无法正确连接到服务器，请确认网络连接!";
                    retryConnection();
                }
            }, function (err) {
                server.Live = "error";
                server.Msg = "当前无法正确连接到服务器，请确认网络连接!";
                retryConnection();
            });
        };

        var retryConnection = function () {
            var timer = {};
            timer = $timeout(
                function () {
                    $timeout.cancel(timer);
                    tryConnection();
                },
                2000
            );
        };

        //tryConnection();

        return {
            host: host,
            pc: pc,
            setHost: function (newhost) {
                host = newhost;
            },
            getServer: function () {
                return server;
            },
            retry: function () {
                retryConnection();
            }
        };
    })
    .factory('Users', function ($resource, Host) {
        var url = Host.host + '/account/:account';
        return $resource(url, {
            account: '@account'
        }, {
            update: {
                method: 'OPTIONS'
            }
        });
    })
    .factory('loginServ', function ($resource, Host) {
        var url = Host.host + '/login/:account';
        return $resource(url, {
            account: '@account'
        });
    })
    .factory('wishlistServ', function ($resource, Host) {
        var url = Host.host + '/:account/wishList';
        return $resource(url, {
            account: '@account'
        });
    });

