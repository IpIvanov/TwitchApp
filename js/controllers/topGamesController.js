'use strict';
twitchApp.controller('topGamesController', ['$scope', '$http', 'PageTitle', function($scope, $http, PageTitle) {
	$http.jsonp('https://api.twitch.tv/kraken/games/top?limit=100&callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	    $scope.data = data.top;
	    $('.btn-lg').show();
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	/*$scope.loadGames = function(number) {
	$http.jsonp('https://api.twitch.tv/kraken/games/top?limit=' + number + '&callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	    $scope.data = data.top;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

	};*/
	PageTitle.setTitle('Top games');
}]);