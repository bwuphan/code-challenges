var mixEvents = function(obj) {
  //Your code here
  var events = {};
  var methods = {};

  obj.trigger = function (event) {
    //Your code here
    console.log('triggered')
    if(arguments.length > 1){
      this.on(arguments)
    } else {
      this.on(event)
    }
  };

  // Register a callback to be fired on this event.
  obj.on = function (event, callback) {
    if(callback){
      if(methods[event] === undefined || null) {
        methods[event] = [callback];
      } else {
        methods[event].push(callback)
      }
    }
    if(!callback) {
      if(typeof event === 'object') {
        var argumentsArray = [];
        for(var key in event) {
          if(key !== '0') {
            argumentsArray.push(event[key])
          }
        }
        console.log(argumentsArray)
        methods[event[0]].forEach(function(cb) {
          cb.apply(null, argumentsArray)
        })
      } else {
        methods[event].forEach(function(cb) {
          cb();
        })
      }
    }
    //Your code here
  };
  return obj;
};


// var obj = {
//         method: 'POST',
//         uri: 'http://127.0.0.1:3000/classes/messages',
//         json: {
//           username: 'Valjean',
//           message: 'In mercy\'s name, three days is all I need.',
//           roomname: 'Hello'
//         }
//       }
//     console.log(obj)
// var string = JSON.stringify(obj.json.message);
// console.log(string.toString());
