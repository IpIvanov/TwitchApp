twitchApp.controller('navController', function($scope, $location) {


	$scope.showSearchGames  = function(path){
		if ($location.path() == '/top-games'){
			return true;
		}
		else return false;
	}

	$scope.showSearchStreams  = function(path){
		if ($location.path() == '/top-streams'){
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
});