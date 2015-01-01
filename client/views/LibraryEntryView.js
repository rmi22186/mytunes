// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialized: function () {
    this.model.on('change', this.render, this);
  },

  tagName: 'tr',

  template: _.template('<td class="artist">(<%= artist %>)</td> \
                        <td class="title"><%= title %></td> \
                        <td class="<% if(queued) print("deq"); else print("enq"); %>"> \
                          <% if(queued) { print("-") } else { print("+") } %> \
                        </td>'),

  events: {
    'click': function(e) {
      if(e.target.className === 'enq') {
        this.model.enqueue();
      } else if (e.target.className === 'deq') {
        this.model.dequeue();
      } else {
        this.model.play();
      }
    },
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
