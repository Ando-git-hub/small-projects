"use strict";

/**
 * Function returns all indexes of passed symbol in passed string
 * @param str {string} - String where need to find symbol
 * @param symbol {string} - Symbol which need to find
 * @returns {Number[]}
 */
exports.findCharIndexesInString = function findCharIndexesInString(str, symbol) {
    if(!str) throw new Error('String required');
    if(typeof symbol !== "string" || symbol.length !== 1) throw new Error('Symbol is required and must be valid symbol');

    const indexes = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === symbol) indexes.push(i)
    }
    // console.log('indexes => ', indexes);
    return indexes;
}


