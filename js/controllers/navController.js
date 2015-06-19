'use strict';
twitchApp.controller('navController', ['$scope', '$location', '$http' , function($scope, $location, $http) {
	var movies = [];
	 $http.jsonp('https://api.twitch.tv/kraken/streams?limit=200&callback=JSON_CALLBACK').success(function(data) {
      var items = data.streams;
      for (var i = 0; i < items.length; i++) {
        movies.push(items[i].channel.display_name);
      }

      $scope.movies = movies.filter(function(elem, pos) {
    	return movies.indexOf(elem) == pos;
  	}); 
      console.log(movies);
});




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