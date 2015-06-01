'use strict';
twitchApp.controller('redditHsController', ['$scope','Reddit', 'PageTitle', function($scope, Reddit, PageTitle ) {
	
	$scope.redditHot = new Reddit('hot', 'hearthstone');
	$scope.redditNew = new Reddit('new', 'hearthstone');
	$scope.redditRising = new Reddit('rising', 'hearthstone');
	$scope.redditTop = new Reddit('top', 'hearthstone');

	$scope.showHot = function() {
		$scope.toggleVar1 = true;
		$scope.toggleVar2 = false;
		$scope.toggleVar3 = false;
		$scope.toggleVar4 = false;
		$scope.hideFirst = true;
	};
    $scope.showNew = function() {
		$scope.toggleVar1 = false;
		$scope.toggleVar2 = true;
		$scope.toggleVar3 = false;
		$scope.toggleVar4 = false;
		$scope.hideFirst = true;
	};
	$scope.showRising = function() {
		$scope.toggleVar1 = false;
		$scope.toggleVar2 = false;
		$scope.toggleVar3 = true;
		$scope.toggleVar4 = false;
		$scope.hideFirst = true;
	};


	$scope.showTop = function() {
		$scope.toggleVar1 = false;
		$scope.toggleVar2 = false;
		$scope.toggleVar3 = false;
		$scope.toggleVar4 = true;
		$scope.hideFirst = true;
	};

	PageTitle.setTitle('News/Hearthstone');


}]);