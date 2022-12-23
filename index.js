// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Binary Agents</h1>`;

/**
 * Return an English translated sentence of the passed binary string.
 * The binary string will be space separated.
 */
function binaryAgent(str) {
  const binArr = str.split(' ');
  const codeArr = [];
  const phrase = [];
  for (let i = 0; i < binArr.length; i++) {
    let code = binArr[i].split('').reverse();
    const transcode = code
      .map((c, idx) => {
        return c * 2 ** idx;
      })
      .reduce((a, c) => a + c);
    codeArr.push(transcode);
  }
  for (let j = 0; j < codeArr.length; j++) {
    phrase.push(String.fromCharCode(codeArr[j]));
  }
  return phrase.join('');
}

console.log(
  binaryAgent(
    '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
  )
);
console.log(
  binaryAgent(
    '01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001'
  )
);
