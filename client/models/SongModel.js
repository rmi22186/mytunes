// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    queued: false
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('playSong', this);
  },

  //=== Functions that emit events to be handled by the collection it's contained in ===
  //add methods for each Song model instance
  enqueue: function(){
    this.trigger('enqueueSong', this);
    this.set('queued', true);
    console.log(this);
  },

  dequeue: function(){
    this.trigger('dequeueSong', this);
    this.set('queued', false);
  },

  ended: function(){
    this.trigger('songEnded', this);
    this.set('queued', false);
  }
});
