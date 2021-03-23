function printManyTimes(str) {
    "use strict";
    // Only
    const sentence = str + " is cool!";
    for (let i = 0; i < str.length; i += 2){
        console.log(sentence);
    }

    return sentence;
    // Only

}

printManyTimes("Arena");
module.exports = printManyTimes;