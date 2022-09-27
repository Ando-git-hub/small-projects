"use strict";

/**
 * Get a bit value of passed number in passed bit position
 * @param number
 * @param bitPosition
 * @returns {number}
 */
function getBit(number, bitPosition) {
    return (number & (1 << bitPosition)) === 0 ? 0 : 1;
}

/**
 * Return true if first and last bits of passed arg are same, false otherwise
 * @param arg
 * @returns {boolean}
 */
function compareFirstAndLastBits(arg) {
    let binaryArg = arg.toString(2);
    console.log('binaryArg ', binaryArg)
    return binaryArg[0] === binaryArg[binaryArg.length-1]
}

console.log(compareFirstAndLastBits(11))

/**
 * Return true if passed arg is power of 2, false otherwise
 * @param arg
 * @returns {boolean}
 */
function checkPowerOfTwo(arg) {
    console.log('binaryArg ', arg.toString(2))
    if(getBit(arg, 0) === 1) return false;

    let exists = false;
    for (let i = 1; i < arg.toString(2).length; i++) {
        if(getBit(arg, i) === 1) {
            if (exists) return false;
            else exists = true
        }

    }
    return true;
}

console.log('checkPowerOfTwo ', checkPowerOfTwo(1024))

/**
 * Return index of first non-repeating character in passed string, if not exists return -1
 * @param arg
 * @returns {number}
 */
function findNonRepeatingIndex (arg) {
    if(typeof arg !== 'string') throw new Error('Argument must be string');
    for(let i = 0; i < arg.length; i++) {
        // if(arg.charIndex((char) => char | arg[i] === char) !== -1) return i;
        let flag = false;
        for (let j = 0; j < arg.length; j++) {
            if((arg[i] | arg[j] === arg[i]) && i !== j)  break;
            if(j === arg.length -1) flag = true
        }
        if(flag) console.log(arg[i])
        if(flag) return i
    }
    return -1
}

console.log('findNonRepeatingIndex ', findNonRepeatingIndex('lrflker;kfjwekljflawjeflawkefjmk;klaewjflajfk'))

