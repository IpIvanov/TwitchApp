'use strict';
twitchApp.controller('redditLolController', ['$scope','Reddit', 'PageTitle', '$location', function($scope, Reddit, PageTitle) {
	
	$scope.redditHot = new Reddit('hot', 'leagueoflegends');
	$scope.redditNew = new Reddit('new', 'leagueoflegends');
	$scope.redditRising = new Reddit('rising', 'leagueoflegends');
	$scope.redditTop = new Reddit('top', 'leagueoflegends');

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

	PageTitle.setTitle('News/League of legends');


}]);