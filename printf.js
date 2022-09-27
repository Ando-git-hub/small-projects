"use strict";

/**
 * Analog function of 'printf' in 'C'
 * @param inputText {string} - Input text
 * @param args
 * @returns {string}
 */
function printf (inputText, ...args) {
    if( typeof inputText !== 'string') throw new Error('First argument must be string');

    let indexOfPercent = 0;
    let currentArgIndex = 1;
    let indexToSearch = 0;

    while (indexOfPercent !== -1) {
        indexOfPercent = inputText.indexOf('%', indexToSearch);

        if(indexOfPercent !== -1) {
            let op = inputText.substring(indexOfPercent, indexOfPercent+2)
            let opC = op.substring(1,2);
            let value = '';

            switch (opC) {
                case 'c': {
                    value = String.fromCharCode(args[currentArgIndex]);
                    currentArgIndex++;
                    break;
                }
                case 'f':
                case 'i': {
                    value = parseFloat(args[currentArgIndex]).toFixed(5);
                    currentArgIndex++;
                    break;
                }
                case 'd': {
                    value = parseInt(args[currentArgIndex]);
                    currentArgIndex++;
                    break;
                }
                default: {
                    break;
                }
            }

            indexToSearch = indexOfPercent + value.toString().length;
            inputText = inputText.replace(op, value)
        }
    }
    console.log('inputText ', inputText)

    return ''
}

console.log(printf('bb %c s %i 1 %d', 75, 48, 1.5));
