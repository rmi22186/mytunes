// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
  },

  songEnded: function() {
    this.shift();
    if(this.length > 0) {
      this.playFirst();
    }
  },

  enqueueSong: function(song) {
    this.add(song);
  },

  dequeueSong: function(song) {
    this.remove(song, {silent :true});
  },

  playFirst: function() {
    this.at(0).play();
  }
});
