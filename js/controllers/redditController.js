'use strict';
twitchApp.controller('redditController', ['$scope', 'RedditHot', 'RedditNew', 'RedditRising', 'PageTitle', function($scope, RedditHot, RedditNew, RedditRising, PageTitle ) {
	
	$scope.redditHot = new RedditHot();
	$scope.redditNew = new RedditNew();
	$scope.redditRising = new RedditRising();
	$scope.showHot = function() {
		$scope.toggleVar1 = true;
		$scope.toggleVar2 = false;
		$scope.toggleVar3 = false;
		$scope.hideFirst = true;
	};
    $scope.showNew = function() {
		$scope.toggleVar1 = false;
		$scope.toggleVar2 = true;
		$scope.toggleVar3 = false;
		$scope.hideFirst = true;
	};
	$scope.showRising = function() {
		$scope.toggleVar1 = false;
		$scope.toggleVar2 = false;
		$scope.toggleVar3 = true;
		$scope.hideFirst = true;
	};

	PageTitle.setTitle('Reddit News');


}]);