'use strict';
twitchApp.controller('streamController', ['$scope', '$http', '$location', 'PageTitle' , function($scope, $http, $location, PageTitle) {
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
	  PageTitle.setTitle(streamName);
}]);

