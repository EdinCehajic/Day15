function checkVariableScope( {
    'use strict';

    // Only
    let i = 'function variable';
    // Only

    if (true) {
        // Only

       let i = 'block variable';
        // Only

        console.log('Scope i is: ', i);

    }
    console.log('Scope i is: ', i);
    reutn i;
}

checkVariableScope();
module.exports = checkVariableScope;