twitchApp.directive('twitchVideo',[function(){
  return{
    restrict: 'E',
    template: '<div>' +streamName+'</div>', // your container
    scope: {
      stream: '='
    },
    link: function(scope, element, attrs){
        scope.$watch(attrs.stream, function(value) {
           element.html(''); // clear any content
           if(value){
                element.html('<object type="application/x-shockwave-flash" height="378" width="620" data="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" bgcolor="#000000">'+
					'<param name="allowFullScreen" value="true">'+
					'<param name="allowScriptAccess" value="always">'+
					'<param name="allowNetworking" value="all">'+
					'<param name="movie" value="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf">'+
					'<param name="flashvars" value="channel='+ streamName + '&amp;auto_play=true&amp;start_volume=100">'+
				'</object>');
           }
        });
    }
  }
}]);