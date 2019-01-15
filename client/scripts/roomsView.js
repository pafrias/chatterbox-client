var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },
  
  renderRoom: function(room) {
    var roomName = _.template(`<%= room %>`);
    this.$select.append(`<div>${roomName}</div>`);
  }

};
