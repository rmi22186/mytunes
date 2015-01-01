// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  $el: $('<div class="song">'),

  template: _.template('<span class="artist">(<%= artist %>)</span> \
                        <span class="title"><%= title %></span>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
