'use strict';
twitchApp.controller('bgStreamsController', ['$scope', '$http', '$q', '$location' , function($scope, $http, $q, $location) {
    var twitch_names = 'gurukkk,promobro,hi_im_flavius,  smilelol1,shadinolol,uncensoreda,Noobcleaver,GamerBGsite,shredderbg,ivan_db,ToymakerX,sa1na,bReaker1909,DooMNoThx,LeagueOfLegends_BG,tg_p1tbull,rains8,annie981,failspotlight,MegaterratronEU,troshikokale,faultles,Cavaradossi94,Zudung,ResolveGamingTV_Darka,NextTVBulgaria,Jemobulas,joXnka,xbad_boyxbg,denisledeniqt,AFKTV'
    var hitbox_names = 'Dsimov1,snik4er,failspotlight,Faultles,naspooTV,vilgax0000,Jumperbg,Hornx,VoidBarrier,BGMasterSasuke,gothika47,pifarmy,skyed,ZeroQUsage,leagueoflegendsbulgaria,AmonAglar,Bezhadeath,Samarov,h4cky,ciliumlol,SavageSoul,WeriwdTV,RoyalCozyThere,omgkhazix,Jelibon4e,pslavov,Smanbg,santaaintreal,ipivanov,STEFOXY';
    twitch_names.toLowerCase();
    hitbox_names.toLowerCase();
    $http.jsonp('https://api.twitch.tv/kraken/streams?channel='+ twitch_names +'&callback=JSON_CALLBACK').
      success(function(data, status, headers, config) {
        var twitchBgStreams;
        $scope.twitchBgStreams = data.streams;
        $http.get('https://api.hitbox.tv/media/live/'+ hitbox_names +'?callback=JSON_CALLBACK').
        success(function(data, status, headers, config) {
                var hitboxBgStreams;
                $scope.hitboxBgStreams = data.livestream;
                
        })
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

}]);