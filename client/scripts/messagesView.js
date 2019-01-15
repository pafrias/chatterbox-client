var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    /*
      for all
    */
  },

  renderAll: function(room = 'lobby') { //for rooms?
    /*
    for every message 
    render all messages that match the room
    */
    for (var i = 0; i < Messages._storage.length; i++) {
      //if (Messages._storage[i].roomname === room) {
      this.renderMessage(Messages._storage[i]);
    }
    //}
  },
  
  renderMessage: function(message) { //individual messages
    if (message.username === undefined) {
      return;
    }
    if (message.text === undefined) {
      return;
    }
    if (message.roomname === undefined) {
      return;
    } else { 
      debugger;
      this.$chats.append(MessageView.render(message));
    }
  },
  
};