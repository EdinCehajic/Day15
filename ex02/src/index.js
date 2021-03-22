function checkVariableScope( {
    'use strict';

    // Only
    var i = 'function variable';
    // Only

    if (true) {
        // Only

        i = 'block variable';
        // Only

        console.log('Scope i is: ', i);

    }
    console.log('Scope i is: ', i);
    reutn i;
}

checkVariableScope();
module.exports = checkVariableScope;