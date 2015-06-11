'use strict';
twitchApp.factory('Reddit', function($http) {


  var Reddit = function(newType, newGame) {
    this.game = newGame;
    this.type = newType;
    this.items = [];
    this.busy = false;
    this.after = '';
  };


  Reddit.prototype.Reddit = function() {
    if (this.busy) return;
    this.busy = true;
    var url = "http://api.reddit.com/r/" + this.game + "/"+ this.type +".json?after=" + this.after + "&jsonp=JSON_CALLBACK";
    $http.jsonp(url).success(function(data) {
      
      var items = data.data.children;
      
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i].data);
      }

      this.after = "t3_" + this.items[this.items.length - 1].id;
      this.busy = false;
    }.bind(this));

  };

  return Reddit;

});