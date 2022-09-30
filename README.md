# Small projects

## Table of contents

- [Function printf](#printf)
- [Find char indexes in string](#char-indexes-in-string)
- [Split string to words by delimiters](#split-string-to-words-by-delimiters)
- [Get all possible variations from characters](#get-all-possible-variations-from-characters)

### Printf
**Analog function of 'printf' in 'C'**
* **Run command**
  * **Node:** `node printf.js`
* **Arguments**
  * **inputText:** `Required` <_Input text_>
  * **args:** `Optional` <_Values for operators_>   

--- 

### Char indexes in string
**Function returns all indexes of passed symbol in passed string**
* **Run command**  
  * **Node:** `node findCharIndexesInString.js`  
* **Arguments**
   * **str:** `Required` <_String where need to find symbol_>
   * **symbol:** `Required` <_Symbol which need to find_>

---    

### Split string to words by delimiters
**Function returns passed string split to words by delimiters**
* **Run commands**
  * **Node:** `node splitBy.js`
* **Arguments**
  * **str:** `Required` <_String need to split_>
  * **delimiters:** `Required` <_Array of delimiters_>

---    

### Get all possible variations from characters
**Recursive function to get all possible variations of passed characters by passed length**
* **Run commands**
  * **Node:** `node getAllPossibleVariationsFromCharacters.js`
* **Arguments**
  * **stringOfCharacters:** `Required` <_string_> - String of all characters
  * **prefix:** `Required` <_string_> Prefix - need to add to result (uses in recursive logic)
  * **n:** `Required` <_number_> - Length of generate string
    
