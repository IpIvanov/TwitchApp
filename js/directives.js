twitchApp.directive('twitchVideo',[function(){
  return{
    restrict: 'E',
    template: '<div></div>', // your container
    scope: {
      stream: '='
    },
    link: function(scope, element, attrs){
        scope.$watch(attrs.stream, function(value) {
           element.html(''); // clear any content
           if(value){
                element.html('your resulting object tag with the stream name received');
           }
        });
    }
  }
}]);