"use strict";

const {splitBy} = require("./splitBy")
const {findCharIndexesInString} = require("./findCharIndexesInString")

if (process.argv[2] === 'findCharIndexesInString')
        console.log(findCharIndexesInString(process.argv[3], process.argv[4]))
else if (process.argv[2] === 'splitBy')
        console.log(findCharIndexesInString(process.argv[3], process.argv[4]))

