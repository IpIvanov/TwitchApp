twitchApp.controller('bgStreamsController', function($scope, $http, $q, $location) {
    var s1  = $http.jsonp('https://api.twitch.tv/kraken/streams/ivan_db?callback=JSON_CALLBACK', {cache: false}),
    	s2 = $http.jsonp('https://api.twitch.tv/kraken/streams/STEFOXY?callback=JSON_CALLBACK', {cache: false});
    	s3 = $http.jsonp('https://api.twitch.tv/kraken/streams/ToymakerX?callback=JSON_CALLBACK', {cache: false});
    	s4 = $http.jsonp('https://api.twitch.tv/kraken/streams/sa1na?callback=JSON_CALLBACK', {cache: false});
    	s5 = $http.jsonp('https://api.twitch.tv/kraken/streams/bReaker1909?callback=JSON_CALLBACK', {cache: false});
    	s6 = $http.jsonp('https://api.twitch.tv/kraken/streams/DooMNoThx?callback=JSON_CALLBACK', {cache: false});
    	s7 = $http.jsonp('https://api.twitch.tv/kraken/streams/LeagueOfLegends_BG?callback=JSON_CALLBACK', {cache: false});
    	s8 = $http.jsonp('https://api.twitch.tv/kraken/streams/tg_p1tbull?callback=JSON_CALLBACK', {cache: false});

	$q.all([s1,s2,s3,s4,s5,s6,s7,s8]).then(function(result) {
		var tmp = [];
		angular.forEach(result, function(response) {
			if(response.data.stream != null){
				tmp.push(response.data);
			}
    		
		});
		return tmp;
	}).then(function(tmpResult) {
  		$scope.tmpResult = tmpResult;
	});



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