// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  $el : $('<div class="songQueue">'),

  initialize: function() {
    this.render();
    this.collection.on('all', this.render, this);
  },

  render: function(){
    this.$el.children().detach();

    this.$el.html('<h4>Song Queue</h4>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
