// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    //=== Queue Functionality Event Listeners ===
    params.library.on('enqueueSong', function(song) {
      this.enqueueSong(song);
    }, this.get('songQueue'));

    params.library.on('dequeueSong', function(song) {
      this.dequeueSong(song);
    }, this.get('songQueue'));

    params.library.on('songEnded', function(song) {
      this.songEnded(song);
    }, this.get('songQueue'));

    //=== Immediate Play Event Listener ===
    params.library.on('playSong', function(song){
      this.set('currentSong', song);
    }, this);
  }

});
