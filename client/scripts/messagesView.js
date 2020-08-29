var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //var messages = this.getMessages();
    console.log('within getmessages: ', App.messages);
    var messages = Messages.getMessages();
    console.log('messages from messagesView', messages);
    // var messages = function() {
    //   return Messages.getMessages()
    // }
    //console.log(messages())
    // var displayMessage = function()
  },

  render() {
    // for the number of messages, generate new message view
    // MessageView.render()

  }
  // render: _.template(`
  //   <div class="chat">
  //     <div>hola!</div>
  //     <div></div>
  //   </div>
  // `)

};