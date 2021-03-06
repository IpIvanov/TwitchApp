'use strict';
twitchApp.controller('streamController', ['$scope', '$http', '$location' , function($scope, $http, $location) {
	var streamName = $location.path().substring(9).toLowerCase();
	$http.jsonp('https://api.twitch.tv/kraken/streams/' + streamName + '?callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	    $scope.data = data;
	    $scope.viewers = data.stream.viewers;
	    $scope.url = data.stream.channel.url + '/embed';
	    $scope.chatUrl = data.stream.channel.url + '/chat';
	   
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	$scope.getViewers = function(){
		$http.jsonp('https://api.twitch.tv/kraken/streams/' + streamName + '?callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	    $scope.viewers = data.stream.viewers;
	   
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	};
	setInterval($scope.getViewers, 1000);
}]);

