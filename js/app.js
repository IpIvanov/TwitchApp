// declare a module
var twitchApp = angular.module('twitchApp', ['ngRoute']);



twitchApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/bg-streams', {
        templateUrl: 'partials/bg-streams.html',
        controller: 'bgStreamsController'
      }).
      when('/games', {
        templateUrl: 'partials/top-games.html',
        controller: 'topGamesController'
      }).
      when('/streams', {
        templateUrl: 'partials/top-streams.html',
        controller: 'topStreamsController'
      }).
      when('/streams/:name', {
        templateUrl: 'partials/stream.html',
        controller: 'streamController'
      }).
      when('/games/:game', {
        templateUrl: 'partials/game.html',
        controller: 'gameController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

