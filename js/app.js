'use strict';
var twitchApp = angular.module('twitchApp', ['ngRoute','infinite-scroll', 'ngSanitize', 'ngResource']);



twitchApp.controller( 'MainCtrl', ['$scope', 'PageTitle', '$location', function($scope, PageTitle, $location) {
  $scope.PageTitle = PageTitle;

    // ===== Scroll to Top ==== 
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 150) {        // If page is scrolled more than 50px
          $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
          $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });
}]);

twitchApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/favorites', {
        templateUrl: 'partials/favorites.html',
        controller: 'favoritesController'
      }).
      when('/news/leagueoflegends', {
        templateUrl: 'partials/reddit_leagueoflegends.html',
        controller: 'redditLolController'
      }).
      when('/news/dota', {
        templateUrl: 'partials/reddit_dota2.html',
        controller: 'redditDotaController'
      }).
      when('/news/hearthstone', {
        templateUrl: 'partials/reddit_hearthstone.html',
        controller: 'redditHsController'
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
      when('/streams/twitch/:name', {
        templateUrl: 'partials/stream.html',
        controller: 'streamTwitchController'
      }).
      when('/streams/hitbox/:name', {
        templateUrl: 'partials/streamHitbox.html',
        controller: 'streamHitboxController'
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


