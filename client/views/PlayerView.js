// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  // when $el (audio controls) receives an "ended" event (part of default html5 audio events), it then calls "ended" from Songmodel

  // explain why bind is here????
  initialize: function() {
    this.$el.on('ended', function() {
      this.model.ended();
    }.bind(this));
  },

  //sets song to currentSong being played, renders it to play
  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
