## ALTERNATE SOLUTIONS

### Solution 1
```js
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
```

### Code Explanation
- Separate the string into an array of strings separated by whitespace.
- Create some variables that you will use along the way - the names are self explanatory for the most part.
- Iterate through each binary string in the new array.
- Convert to decimal by using `parseInt(_binary_, 2)`.  Use the second parameter to specify the base of the input numbers.
- At the end, return the converted message.

### REFERENCE LINKS
- [String.prototype.split](https://forum.freecodecamp.org/t/javascript-string-prototype-split-split-explained-with-examples/15944)
- [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)


### Solution 2
```js
function binaryAgent(str) {
  // Separate the binary code by space.
  str = str.split(" ");
  var power;
  var decValue = 0;
  var sentence = "";

  // Check each binary number from the array.
  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;

        // Record the decimal value by adding the number to the previous one.
      }
    }

    // After the binary number is converted to decimal, convert it to string and store
    sentence += String.fromCharCode(decValue);

    // Reset decimal value for next binary number.
    decValue = 0;
  }

  return sentence;
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
```

### Code Explanation
- For each of these binary strings, check for the ones and ignore the zeroes.
- For those that are one or active then convert them to decimal, this takes into account the position and hte right power it needs to be raised to.
- Store the power into the **power** variable by adding it to any previous ones on the variable **decValue**. This variable will add and add hte powers of the active ones until the end of the loop and then return the deicmal number.
- Convert the final decimal outside of the inner loop and then convert it to ASCII and saving it to **sentence** along with any other text string already converted and stored.
- Reset the variable **decValue** to avoid getting wrong decimals before continuing to the outer loop.

### REFERENCE LINKS
- [`Math.pow`](https://forum.freecodecamp.org/t/javascript-exponents-explained-math-pow-examples/14685)
- [`String.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)


### Solution 3
```js
function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
```

### Code Explanation
- First we use `split()` to be able to work on each character as an Array element.
- Then use `map()` to process each element from binary to decimal using `parseInt()`.
- Last we can use `String.fromCharCode()` to convert each ASCII number into the corresponding character.
- However, `fromCharCode()` expects a series of numbers rather than an Array!  We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers.  See here for more info: [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

### REFERENCE LINKS
- [Array.prototype.map](https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-map-javascript-map-explained-with-examples/14294)


### Alternative Advanced Code Solution
```js
const binaryAgent = str => str.replace(/\d+./g, char => String.fromCharCode(`0b${char}`));
       
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

### Code Explanation
- Find all groups of one or more digits followed by one other character.
- Replace with a string created from the specified sequence of UTF-16 code units.
- Use `0b` to lead the code unit to express that a binary integer literal is being converted.

### REFERENCE LINKS
- [`String.fromCharCode()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
- [`String.prototype.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Convert a string of binary characters to the ASCII equivalents](https://codegolf.stackexchange.com/questions/35096/convert-a-string-of-binary-characters-to-the-ascii-equivalents)
- [Grammar and types/Numeric Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Numeric_literals)


