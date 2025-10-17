

let count = 0;

function cc(card) {
  if ([2, 3, 4, 5, 6].includes(card)) {
    count++;
  } else if ([10, 'J', 'Q', 'K', 'A'].includes(card)) {
    count--;
  }
  let decision = count > 0 ? "Bet" : "Hold";
  return count + " " + decision;
}


console.log(cc(2));

console.log(cc(3));

console.log(cc(7));

console.log(cc('K'));

console.log(cc('A'));

console.log(cc(10));

//

console.log(cc(2));   // "1 Bet"
console.log(cc(3));   // "2 Bet"
console.log(cc(7));   // "2 Bet"
console.log(cc('K')); // "1 Bet"
console.log(cc('A')); // "0 Hold"
console.log(cc(10));  // "-1 Hold"