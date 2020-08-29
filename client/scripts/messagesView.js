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

    console.log(data);
    var html = _.template(`
    <div class="chat">
      <div>Message Content: ${data}</div>
      <div></div>
    </div>
    `);

    MessagesView.$chats.append(html);
  }

};