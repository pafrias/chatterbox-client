var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.renderRoom({room: 'test'});
    // populate rooms
    // render all rooms?
  },

  render: function() {
  },
  
  renderRoom: function(room) {
    var roomName = _.template(`<option><%= room %></option>`);
    var trueName = roomName(room);
    this.$select.append(trueName);
  }

};