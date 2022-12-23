# fcc-intermediate-algorithm-scripting-lesson-17

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-stgp2m)

## PROBLEM EXPLANATION
This problem is very straight forward - you start with a string that represents a sentence in binary code, and you need to translate that into words.  There is not a direct way to do this so you will have to translate twice.

### REFERENCE LINKS
- [`String.prototype.charCodeAt`](https://forum.freecodecamp.org/t/javascript-string-prototype-charcodeat-char-code-at-explained-with-examples/15933)
- [`String.fromCharCode`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

## HINTS
### Hint 1
You should first convert from **binary** to **decimal** before translating those values into characters.

### Hint 2
Things are easier when focusing on smaller parts, divide the input to focus on one letter at a time.

