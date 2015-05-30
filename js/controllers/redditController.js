'use strict';
twitchApp.controller('redditController', ['$scope', 'Reddit', 'PageTitle', function($scope, Reddit, PageTitle ) {


    $scope.reddit = new Reddit();
	PageTitle.setTitle('Reddit News');


}]);