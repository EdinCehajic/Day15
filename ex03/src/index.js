function printManyTimes(str) {
    "use strict";
    // Only
    var sentence = str + " is cool!";
    for (var i = 0; i < str.length; i += 2){
        console.log(sentence);
    }

    return sentence;
    // Only

}

printManyTimes("Arena");
module.exports = printManyTimes;