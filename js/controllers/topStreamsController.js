'use strict';
twitchApp.controller('topStreamsController', ['$scope', '$http', 'PageTitle', function($scope, $http, PageTitle, NavContainer) {
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
	
	$scope.templateUrl = function() {
    return NavContainer.templates.nav1;
  	}
    


	PageTitle.setTitle('Top100 streams');

}]);