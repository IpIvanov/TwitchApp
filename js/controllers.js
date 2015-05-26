twitchApp.controller('bgStreamsController', function($scope) {
    




}).controller('topGamesController', function($scope, $http) {
	$http.get('https://api.twitch.tv/kraken/games/top?limit=24').
	  success(function(data, status, headers, config) {
	    $scope.data = data.top;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	$scope.loadGames = function(number) {
	$http.get('https://api.twitch.tv/kraken/games/top?limit=' + number).
	  success(function(data, status, headers, config) {
	    $scope.data = data.top;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

	};

}).controller('topStreamsController', function($scope, $http) {
    $scope.counter = 1;
	$http.get('https://api.twitch.tv/kraken/streams?limit=100').
	  success(function(data, status, headers, config) {
	    $scope.data = data.streams;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	$scope.nextPage = function(number) {
	$http.get('https://api.twitch.tv/kraken/streams?limit=100&offset=' + number).
	  success(function(data, status, headers, config) {
	    $scope.data = data.streams;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

	};

	$scope.previousPage = function(number) {
	 $http.get('https://api.twitch.tv/kraken/streams?limit=100&offset=' + number).
	  success(function(data, status, headers, config) {
	    $scope.data = data.streams;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

	};
	



});
