'use strict';
twitchApp.controller('navController', ['$scope', '$location' , function($scope, $location) {

	$scope.showSearchGames  = function(path){
		if ($location.path() == '/games'){
			return true;
		}
		else return false;
	}

	$scope.showSearchStreams  = function(path){
		if ($location.path() == '/streams'){
			return true;
		}
		else return false;
	}


    $scope.getClass = function(path) {
    if ($location.path().substr(0, path.length) == path) {
      return "active"
    } else {
      return ""
    }
}
}]);