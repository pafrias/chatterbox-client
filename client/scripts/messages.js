var Messages = { 
  _storage: [],
  
  newMessage: function(text, roomname) {
    // make a new object
    //assign user room and text keys
    //generate a createdAt string
    //post to server
    //on successful post, GET from setver and display new messages
    var message = {
      username: App.username,
      roomname: roomname,
      text: text,
      createdAt: Date.now()
    };
    Parse.create(message, () => {
      // Parse.readAll(() => {
      //   MessagesView.renderAll();
      window.location.reload(true);
      //})
    });
  },

  fetch: function() {
    
  }
  // stores local messages
  
  // push to server
  // fetch from server


};