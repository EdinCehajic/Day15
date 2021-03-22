// Only
var myName;
var message;
 // Only

 myName = "Padawans";
 function myMsg(name) {
     "use strict";
     message = "Hello, " + name + "!";
     return message;
 }
 console.log(myMsg(myName));
 module.exports = myMsg;
 