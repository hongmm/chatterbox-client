var Messages = {
  // getMessages: function(callback = ()=>{}) {
  //   var messages;
  //   //console.log("was here");
  //   Parse.readAll((data) => {
  //     // examine the response from the server request:
  //     //console.log(typeof data);
  //     messages = data.results;
  //     callback();
  //     //console.log("message object: ", messages);
  //   });
  //   return messages;
  // },
  getMessages: function() {
    //Parse.readAll( (data) => { return data.results[0] } );

    var messages = Parse.readAll( (data) => { return data.results; } );
    console.log(messages);
    return messages;
  }
};
