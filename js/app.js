'use strict';
var twitchApp = angular.module('twitchApp', ['ngRoute','infinite-scroll', 'ngSanitize']);

twitchApp.controller( 'MainCtrl', ['$scope', 'PageTitle', '$location', function($scope, PageTitle, $location) {
  $scope.PageTitle = PageTitle;
}]);

twitchApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/reddit-news', {
        templateUrl: 'partials/reddit.html',
        controller: 'redditController'
      }).
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
        redirectTo: '/games'
      });
      $locationProvider.html5Mode(true);
  }]);

