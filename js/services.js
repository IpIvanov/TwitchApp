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

}).factory('TopStreams', function($http) {


  var TopStreams = function() {
    this.items = [];
    this.busy = false;
    this.after = 0;
  };


  TopStreams.prototype.nextPage = function() {
    if (this.busy) return;
    this.busy = true;
    var url = "https://api.twitch.tv/kraken/streams?limit=18&offset=" + this.after + "&callback=JSON_CALLBACK";
    $http.jsonp(url).success(function(data) {
      var items = data.streams;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i]);
      }
      this.after += 18;
      this.busy = false;
    }.bind(this));
  };

  return TopStreams;

}).factory('TopGames', function($http) {


  var TopGames = function() {
    this.items = [];
    this.busy = false;
    this.after = 0;
  };


  TopGames.prototype.nextPage = function() {
    if (this.busy) return;
    this.busy = true;
    var url = "https://api.twitch.tv/kraken/games/top?limit=36&offset=" + this.after + "&callback=JSON_CALLBACK";
    $http.jsonp(url).success(function(data) {
      var items = data.top;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i]);
      }
      this.after += 36;
      this.busy = false;
    }.bind(this));
  };

  return TopGames;

}).factory('CategoryStreams', function($http) {


  var CategoryStreams = function(gameName) {
    this.items = [];
    this.busy = false;
    this.after = 0;
    this.name = gameName;
  };


  CategoryStreams.prototype.nextPage = function() {
    if (this.busy) return;
    this.busy = true;
    var url = "https://api.twitch.tv/kraken/streams?game="+ this.name +"&limit=18&offset=0" + this.after + "&callback=JSON_CALLBACK";
    $http.jsonp(url).success(function(data) {
      var items = data.streams;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i]);
      }
      this.after += 18;
      this.busy = false;
    }.bind(this));
  };

  return CategoryStreams;

});