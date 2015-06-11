'use strict';
twitchApp.controller('redditDotaController', ['$scope','Reddit', function($scope, Reddit ) {
	
	$scope.redditHot = new Reddit('hot', 'dota2');
	$scope.redditNew = new Reddit('new', 'dota2');
	$scope.redditRising = new Reddit('rising', 'dota2');
	$scope.redditTop = new Reddit('top', 'dota2');

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
}]);