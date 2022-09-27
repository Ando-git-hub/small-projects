"use strict";
const { findCharIndexesInString } = require("./findCharIndexesInString");

/**
 * Return passed string split to words by delimiters
 * @param str {String} - String need to split
 * @param delimiters {String[]} - Array of delimiters
 * @returns {String[]}
 */
const splitBy = exports.splitBy = function splitBy(str, delimiters) {
    if(!str) throw new Error('String required');
    let indexes = [];
    let words = [];

    for (let symbol of delimiters) {
        indexes = [...indexes, ...findCharIndexesInString(str, symbol)];
    }

    indexes = indexes.sort((a, b) => a < b ? -1 : 1);

    if(indexes[0] !== 0) {
        let word = str.substring(0, indexes[0]);
        if(word) words.push(word)
    }

    for (let i = 0; i < indexes.length; i++) {
        let word = str.substring(indexes[i] + 1, indexes[i+1]);
        if(word) words.push(word)
    }

    console.log('words ', words)
    return words;
}

console.log(splitBy('jhj gkhgj dssdfkj a dhgjhdfchf ghjegf jahsgfkjashgdfahgcrcuqwdrbn3urhd3drq s3bm jh q s34 rh3gr s', ['j', 'g']))


