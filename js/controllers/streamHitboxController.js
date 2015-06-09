'use strict';
twitchApp.controller('streamHitboxController', ['$scope', '$http', '$location', 'PageTitle' , function($scope, $http, $location, PageTitle) {
	var streamName = $location.path().substring(16).toLowerCase();
	console.log(streamName)
	$http.get('https://api.hitbox.tv/media/live/' + streamName + '?callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	
	    $scope.data = data.livestream;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
}]);

