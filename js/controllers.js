twitchApp.controller('bgStreamsController', function($scope) {
    




}).controller('topGamesController', function($scope, $http) {
	$http.jsonp('https://api.twitch.tv/kraken/games/top?limit=24&callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	    $scope.data = data.top;
	    $('.btn-lg').show();
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	$scope.loadGames = function(number) {
	$http.jsonp('https://api.twitch.tv/kraken/games/top?limit=' + number + '&callback=JSON_CALLBACK').
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
	$http.jsonp('https://api.twitch.tv/kraken/streams?limit=100&callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	    $scope.data = data.streams;
	    $('.btn-lg , .counter').show();
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	$scope.nextPage = function(number) {
	$http.jsonp('https://api.twitch.tv/kraken/streams?limit=100&offset=' + number + '&callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	    $scope.data = data.streams;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

	};

	$scope.previousPage = function(number) {
	 $http.jsonp('https://api.twitch.tv/kraken/streams?limit=100&offset=' + number + '&callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	    $scope.data = data.streams;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

	};
	



}).controller('streamController', function($scope, $http, $location) {
	var streamName = $location.path().substring(9).toLowerCase();
	$http.jsonp('https://api.twitch.tv/kraken/streams/' + streamName + '?callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	    $scope.data = data;
	    $scope.url = data.stream.channel.url + '/embed';
	    $scope.chatUrl = data.stream.channel.url + '/chat';
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });



}).controller('gameController', function($scope, $http, $location) {

	var gameName = $location.path().substring(5).toLowerCase();
	$scope.gameName = gameName;
	$http.jsonp('https://api.twitch.tv/kraken/search/streams?limit=100&q=' + gameName + '&callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	    $scope.data = data.streams;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	
});