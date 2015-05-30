'use strict';
twitchApp.factory('PageTitle', function(){
  var title = '';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };

}).factory('RedditHot', function($http) {
  var RedditHot = function() {
    this.type = "hot";
    this.items = [];
    this.busy = false;
    this.after = '';
  };

  RedditHot.prototype.RedditHot = function() {
    if (this.busy) return;
    this.busy = true;
    var url = "http://api.reddit.com/r/leagueoflegends/"+ this.type +".json?after=" + this.after + "&jsonp=JSON_CALLBACK";
    $http.jsonp(url).success(function(data) {
      
      var items = data.data.children;

      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i].data);
      }

      this.after = "t3_" + this.items[this.items.length - 1].id;
      this.busy = false;
    }.bind(this));

  };

  return RedditHot;

}).factory('RedditNew', function($http) {
  var RedditNew = function() {
    this.type = "new";
    this.items = [];
    this.busy = false;
    this.after = '';
  };

  RedditNew.prototype.RedditNew = function() {
    if (this.busy) return;
    this.busy = true;
    var url = "http://api.reddit.com/r/leagueoflegends/"+ this.type +".json?after=" + this.after + "&jsonp=JSON_CALLBACK";
    $http.jsonp(url).success(function(data) {
      
      var items = data.data.children;

      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i].data);
      }

      this.after = "t3_" + this.items[this.items.length - 1].id;
      this.busy = false;
    }.bind(this));

  };

  return RedditNew;

}).factory('RedditRising', function($http) {
  var RedditRising = function() {
    this.type = "rising";
    this.items = [];
    this.busy = false;
    this.after = '';
  };

  RedditRising.prototype.RedditRising = function() {
    if (this.busy) return;
    this.busy = true;
    var url = "http://api.reddit.com/r/leagueoflegends/"+ this.type +".json?after=" + this.after + "&jsonp=JSON_CALLBACK";
    $http.jsonp(url).success(function(data) {
      
      var items = data.data.children;

      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i].data);
      }

      this.after = "t3_" + this.items[this.items.length - 1].id;
      this.busy = false;
    }.bind(this));

  };

  return RedditRising;

});