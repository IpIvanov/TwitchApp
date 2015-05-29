'use strict';
twitchApp.controller('gameController', ['$scope', '$http', '$location', 'PageTitle' ,function($scope, $http, $location, PageTitle) {

	var gameName = $location.path().substring(7).toLowerCase();
	$scope.gameName = gameName;
	$http.jsonp('https://api.twitch.tv/kraken/search/streams?limit=100&q=' + gameName + '&callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	    $scope.data = data.streams;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	PageTitle.setTitle($location.path().substring(7));
}]);