// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    // "this" is the appView initialized from index.html
    // the playerView is instantiated using the currentSong which by default is nothing
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    // the libraryView is instantiated using library which is within its model
    this.libraryView = new LibraryView({collection: this.model.get('library')});


    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      
      //***should there be a "this" in front of model.get('currentSong')
      
      // console.log(this.model.get('currentSong'))
      this.playerView.setSong(this.model.get('currentSong'));

    }, this);
  },

  //returns the html for each of this (app) properties: playerview, libraryView, songQueueView
  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
