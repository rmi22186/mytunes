// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    queued: false
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
    this.set('queued', true);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
    this.set('queued', false);
  },

  ended: function(){
    this.trigger('ended', this);
    this.set('queued', false);
  }
});
