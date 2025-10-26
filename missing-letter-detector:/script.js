

function fearNotLetter(str) {
  let startCode = str.charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) !== startCode + i) {
      return String.fromCharCode(startCode + i);
    }
  }

  return undefined;
}


console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

