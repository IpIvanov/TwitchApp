'use strict';
twitchApp.controller('streamHitboxController', ['$scope', '$http', '$location', function($scope, $http, $location) {
	var streamName = $location.path().substring(16).toLowerCase();
	$http.get('https://api.hitbox.tv/media/live/' + streamName + '?callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	
	    $scope.data = data.livestream;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
}]);

