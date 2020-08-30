var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    //var messages = this.getMessages();
    //Messages.getMessages();
    //console.log('messages from messagesView', messages);
    // var messages = function() {
    //   return Messages.getMessages()
    // }
    //console.log(messages())
    // var displayMessage = function()
  },

  render: function(data) {
    // for the number of messages, generate new message view
    // MessageView.render()
    // MessagesView.$chats.append(data);

    // console.log(data);
    // var html = _.template(`
    // <div class="chat">
    // <div>Username: ${data.results[5].username}</div>
    //   <div>Message Content: ${data.results[5].text}</div>
    //   <div></div>
    // </div>
    // `);

    _.each(Messages.items(), function(message) {
      // render a message
      var $message = MessageView.render(message);
      MessagesView.$chats.append($message);
    });

    // MessagesView.$chats.append(html);
  }

};