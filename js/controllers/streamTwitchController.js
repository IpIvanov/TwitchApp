'use strict';
twitchApp.controller('streamTwitchController', ['$scope', '$http', '$location', function($scope, $http, $location) {
	var streamName = $location.path().substring(16).toLowerCase();
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
}]);

