// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({


  initialized: function () {
    // this.model.on('change', this.render, this);
  },

  tagName: 'tr',

  // creating a user facing queue/dequeue option with a + or - that renders on change in the LibraryView initialize function
   template: _.template('<td class="artist">(<%= artist %>)</td> \
                        <td class="title"><%= title %></td> \
                        <td class="<% if(queued) print("deq"); else print("enq"); %>"> \
                          <% if(queued) { print("-") } else { print("+") } %> \
                        </td>'),


  // when clicking on the + or -, enqueues or dequeues song
  // this is the 'controller' part of the view.  takes a user input, passes it along as enqueue or dequeue
  // event emitter can be triggered to emit an event, the listener hears the event, then invokes the event handler.
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
