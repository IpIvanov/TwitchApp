'use strict';
twitchApp.factory('PageTitle', function(){
  var title = '';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };
});