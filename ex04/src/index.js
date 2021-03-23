const milili = [10, 25, 4]; // Don not

function myArr(mili) {
    'use strict';
    // Only
    // Using mili = [4, 10, 25] invalid
    mili[0] = 4;
    mili[1] = 10;
    mili[2] = 25;
    // Only
    return mili;
}
console.log(myArr(milili)); // Only
module.exports = myArr;