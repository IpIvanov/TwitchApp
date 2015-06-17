'use strict';
twitchApp.controller('topHitboxController', ['$scope', '$http', function($scope, $http) {
	$http.get('https://api.hitbox.tv/media/live/list?callback=JSON_CALLBACK').
	  success(function(data, status, headers, config) {
	    $scope.data = data.livestream;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
}]);