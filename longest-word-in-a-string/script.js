function findLongestWordLength(sentence) {
  const words = sentence.split(' ');

  let longest = 0;

  for (let word of words) {
    if (word.length > longest) {
      longest = word.length
    }
  }
  
  return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
