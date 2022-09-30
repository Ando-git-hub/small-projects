"use strict";
// const symbols = 'abc';
const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
const numberOfCharacters = characters.length;
let count = 0;
let allVariations = [];

/**
 * Recursive function to get all possible variations of passed characters by passed length
 * @param stringOfCharacters {string} - String of all characters
 * @param n {number} - length of generate string
 * @param prefix {string} - prefix need to add to result (uses in recursive logic)
 */
function getAllPossibleVariationsFromCharacters(stringOfCharacters, n, prefix = '') {
    if (n===0){
        count++
        console.log(count + ' => ', prefix);
        allVariations.push(prefix)
        return;
    }

    for (let i = 0; i < numberOfCharacters; ++i)
    {
        /** Next character of input added */
        let newPrefix = prefix + stringOfCharacters[i];

        /** Recursive call with decreased n*/
        getAllPossibleVariationsFromCharacters(stringOfCharacters, n - 1, newPrefix);
    }
}


// getAllPossibleVariationsFromCharacters(characters,'', 16);
// console.log('Total count => ', allVariations.length)


/**
 * Function for test previous function
 * @param n {number} - length of generate string(last argument of perv function)
 * @param checkValuesCount {number} - count of random values to check existing (optional, default 10)
 */
function testPrevFunction(n, checkValuesCount = 10) {
    getAllPossibleVariationsFromCharacters(characters, n);

    /** Check total count */
    let countMustBe = Math.pow(numberOfCharacters, n)
    if(allVariations.length !== countMustBe) throw new Error(`Not correct count, Expect: ${countMustBe}, Received: ${allVariations.length}`);

    /** Generate random values */
    let randomValues = [];
    for (let i = 1; i<= checkValuesCount; i++)
        randomValues.push(generateRandomString(n))

    /** Check existing of generated random values */
    for(let hex of allVariations) {
        let index = randomValues.indexOf(hex);
        if(index !== -1) {
            console.log(`Random value ${hex} exists!`);
            randomValues.splice(index, 1);

            if(randomValues.length === 0) break;
        }
    }

    if(randomValues.length !== 0) throw new Error('Following values not exists - ' + randomValues.concat(','));
}

/** Call test function for length 4 */
testPrevFunction(4, 50)

/**
 * Generate random  string from characters by passed length
 * @param length  {number} - Length of string to generate
 * @returns {string}
 */
function generateRandomString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}



