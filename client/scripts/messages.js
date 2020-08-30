var Messages = {

  _data: {},

  items: function() {
    //return _.chain(Object.values(Messages._data)).sortBy('createdAt');

    var values = Object.values(Messages._data);
    return _.sortBy(values, function(val) { return val === 'createdAt'; });
  },

  add: function(message, callback = () => {}) {
    Messages._data[message.objectId] = message;
    callback(Messages.items());
  },

  update: function(messages, callback = () => {}) {
    var numOfMessages = Object.keys(Messages._data); // length of messages in _data before
    for (var message of messages) {
      Messages._data[message.objectId] = Messages._conform(message);
    }

    if (Object.keys(Messages._data).length !== numOfMessages) {
      callback(Messages.items());
    }
  },

  _conform: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }
};
