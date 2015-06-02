'use strict';
twitchApp.controller('favoritesController', ['$scope', '$location', '$http' , function($scope, $location, $http) {
	 $scope.isAuthenticated = false;
    window.CLIENT_ID = 'pw55h8f7lazq5n559fe87lip43mbfzc';
    var name;
    $(function() {
      // Initialize. If we are already logged in, there is no
      // need for the connect button
      Twitch.init({clientId: CLIENT_ID}, function(error, status) {
        if (status.authenticated) {
          // we're logged in :)
  		    $scope.isAuthenticated = true;
           Twitch.api({method: 'user'}, function(error, user) {
            $('#logout').append(user.display_name);
              name = user.display_name;
              
              console.log($location.path() + '/' + name);
              var url;
              $http.jsonp('https://api.twitch.tv/kraken/users/'+ name +'/follows/channels?limit=100&callback=JSON_CALLBACK').
                success(function(data, status, headers, config) {
                var channels = [];
                for (var i = 0; i < data.follows.length; i++) {
                    channels.push(data.follows[i].channel.name);
                  }
                channels.toString();
                url = 'https://api.twitch.tv/kraken/streams?channel='+ channels +'&callback=JSON_CALLBACK'
                


                  $http.jsonp(url).success(function(data, status, headers, config) {
                    $scope.data = data.streams;
                    $scope.oflineStreams = 'All favorite streams are offline!';
                  }).
                  error(function(data, status, headers, config) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  });


                }).
                error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                });

                
              
           });

          $scope.status = status.scope;
     
        } else {
         
          $('.authenticate').removeClass('hidden');
        }
      });

     
      $('.twitch-connect').click(function() {
        Twitch.login({
          scope: ['user_read', 'channel_read']
        });
      })
      $('button#logout').click(function() {
        Twitch.logout();
        // Reload page and reset url hash. You shouldn't
        // need to do this.
        window.location = window.location.pathname
      })
    });

}]);