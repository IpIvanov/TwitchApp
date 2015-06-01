'use strict';
twitchApp.controller('favoritesController', ['$scope', '$location' , function($scope, $location) {
	 $scope.isAuthenticated = false;
    window.CLIENT_ID = 'pw55h8f7lazq5n559fe87lip43mbfzc';

    $(function() {
      // Initialize. If we are already logged in, there is no
      // need for the connect button
      Twitch.init({clientId: CLIENT_ID}, function(error, status) {
        if (status.authenticated) {
          // we're logged in :)
  		    $scope.isAuthenticated = true;
          Twitch.api({method: 'user'}, function(error, user) {
            $('#logout').append(user.display_name);
            user = user.display_name;

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

      $('#get-name button').click(function() {
        Twitch.api({method: 'user'}, function(error, user) {
          $('#get-name input').val(user.display_name);
          console.log(user.display_name)
        });
      })

      $('#get-stream-key button').click(function() {
        Twitch.api({method: 'channel'}, function(error, channel) {
          $('#get-stream-key input').val(channel.stream_key);
        });
      })

    });
    var user = function(){
      Twitch.api({method: 'user'}, function(error, user) {
            $('#logout').append(user.display_name);
           
            
            return user.display_name;
          });
      return user.display_name;
    }
    console.log(user);
}]);