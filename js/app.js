'use strict';
var twitchApp = angular.module('twitchApp', ['ngRoute','infinite-scroll', 'ngSanitize', 'ngResource', 'ui.bootstrap', 'autocomplete']);



twitchApp.controller( 'MainCtrl', ['$scope', '$location', function($scope, $location) {

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
        controller: 'favoritesController',
        title: 'Favorites'
      }).
      when('/news/leagueoflegends', {
        templateUrl: 'partials/reddit_leagueoflegends.html',
        controller: 'redditLolController',
        title: 'News'
      }).
      when('/news/dota', {
        templateUrl: 'partials/reddit_dota2.html',
        controller: 'redditDotaController',
        title: 'News'
      }).
      when('/news/hearthstone', {
        templateUrl: 'partials/reddit_hearthstone.html',
        controller: 'redditHsController',
        title: 'News'
      }).
      when('/bg-streams', {
        templateUrl: 'partials/bg-streams.html',
        controller: 'bgStreamsController',
        title: 'Bg Streams'
      }).
      when('/games', {
        templateUrl: 'partials/top-games.html',
        controller: 'topGamesController',
        title: 'Top Games'
      }).
      when('/streams', {
        templateUrl: 'partials/top-streams.html',
        controller: 'topStreamsController',
        title: 'Top Streams'
      }).
      when('/streams/:name', {
        templateUrl: 'partials/stream.html',
        controller: 'streamController',
        title: 'Video'
      }).
      when('/streams/twitch/:name', {
        templateUrl: 'partials/stream.html',
        controller: 'streamTwitchController',
        title: 'Video'
      }).
      when('/streams/hitbox/:name', {
        templateUrl: 'partials/streamHitbox.html',
        controller: 'streamHitboxController',
        title: 'Video'
      }).
      when('/hitbox', {
        templateUrl: 'partials/top-streams-hitbox.html',
        controller: 'topHitboxController',
        title: 'Top Streams Hitbox'
      }).
      when('/games/:game', {
        templateUrl: 'partials/game.html',
        controller: 'gameController',
        title: 'Game'
      }).
      otherwise({
        redirectTo: '/games'
      });
      $locationProvider.html5Mode(true);
  }]);

twitchApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

        if (current.hasOwnProperty('$$route')) {

            $rootScope.title = current.$$route.title;
        }
    });
}]);


