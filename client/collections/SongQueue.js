// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
  },

  ended: function() {
    this.shift();
    if(this.length > 0) {
      this.playFirst();
    }
  },

  enqueue: function(song) {
    this.add(song);
    console.dir(this);
  },

  dequeue: function(song) {
    this.remove(song, {silent :true});
    console.dir(this);
  },

  playFirst: function() {
    this.at(0).play();
  }
});
