var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(() => {
      MessagesView.renderAll();
      App.stopSpinner();
    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages._storage = data.results;
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
