'use strict';
twitchApp.controller('bgStreamsController', ['$scope', '$http', '$q', '$location', 'PageTitle' , function($scope, $http, $q, $location, PageTitle) {
    var bgStreams = [];
    bgStreams = [$http.jsonp('https://api.twitch.tv/kraken/streams/ivan_db?callback=JSON_CALLBACK', {cache: false}),
    	$http.jsonp('https://api.twitch.tv/kraken/streams/STEFOXY?callback=JSON_CALLBACK', {cache: false}),
    	$http.jsonp('https://api.twitch.tv/kraken/streams/ToymakerX?callback=JSON_CALLBACK', {cache: false}),
    	$http.jsonp('https://api.twitch.tv/kraken/streams/sa1na?callback=JSON_CALLBACK', {cache: false}),
    	$http.jsonp('https://api.twitch.tv/kraken/streams/bReaker1909?callback=JSON_CALLBACK', {cache: false}),
    	$http.jsonp('https://api.twitch.tv/kraken/streams/DooMNoThx?callback=JSON_CALLBACK', {cache: false}),
    	$http.jsonp('https://api.twitch.tv/kraken/streams/LeagueOfLegends_BG?callback=JSON_CALLBACK', {cache: false}),
    	$http.jsonp('https://api.twitch.tv/kraken/streams/tg_p1tbull?callback=JSON_CALLBACK', {cache: false}),
    	$http.jsonp('https://api.twitch.tv/kraken/streams/rains8?callback=JSON_CALLBACK', {cache: false}),
    	$http.jsonp('https://api.twitch.tv/kraken/streams/annie981?callback=JSON_CALLBACK', {cache: false}),
        $http.jsonp('https://api.twitch.tv/kraken/streams/failspotlight?callback=JSON_CALLBACK', {cache: false}),
        $http.jsonp('https://api.twitch.tv/kraken/streams/MegaterratronEU?callback=JSON_CALLBACK', {cache: false}),
        $http.jsonp('https://api.twitch.tv/kraken/streams/troshikokale?callback=JSON_CALLBACK', {cache: false}),
        $http.jsonp('https://api.twitch.tv/kraken/streams/faultles?callback=JSON_CALLBACK', {cache: false}),
        $http.jsonp('https://api.twitch.tv/kraken/streams/Cavaradossi94?callback=JSON_CALLBACK', {cache: false}),
        $http.jsonp('https://api.twitch.tv/kraken/streams/Zudung?callback=JSON_CALLBACK', {cache: false}),
        $http.jsonp('https://api.twitch.tv/kraken/streams/ResolveGamingTV_Darka?callback=JSON_CALLBACK', {cache: false}),
        $http.jsonp('https://api.twitch.tv/kraken/streams/NextTVBulgaria?callback=JSON_CALLBACK', {cache: false}),
        $http.jsonp('https://api.twitch.tv/kraken/streams/Jemobulas?callback=JSON_CALLBACK', {cache: false}),
        $http.jsonp('https://api.twitch.tv/kraken/streams/joXnka?callback=JSON_CALLBACK', {cache: false}),
        $http.jsonp('https://api.twitch.tv/kraken/streams/xbad_boyxbg?callback=JSON_CALLBACK', {cache: false}),
        $http.jsonp('https://api.twitch.tv/kraken/streams/denisledeniqt?callback=JSON_CALLBACK', {cache: false}),
        $http.jsonp('https://api.twitch.tv/kraken/streams/AFKTV?callback=JSON_CALLBACK', {cache: false})]
        

	$q.all(bgStreams).then(function(result) {
		var tmp = [];
		angular.forEach(result, function(response) {
			if(response.data.stream != null){
				tmp.push(response.data);
			}

		});

		return tmp;
	}).then(function(tmpResult) {
  		$scope.tmpResult = tmpResult;
        
	});

    PageTitle.setTitle('Bg-streams');

}]);