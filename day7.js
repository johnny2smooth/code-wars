// #1: find the next perfect square
function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq)
  return Math.sqrt(sq) % 1 == 0 ? Math.pow( sqrt + 1, 2) : -1;
}

// none better

// #2: friend or foe?
// If the name in an array has 4 letters in it, they're a freind.
function friend(friends){
  return friends.filter(name => name.length == 4)
}

// #3: Print errors
// a-m are valid when printed. others are not. count the errors / total
function printerErrors(string){
  let regex = /[a-m]/gi;
  let filtered = string.split("").filter(elem => !elem.match(regex));
  return `${filtered.length}/${string.length}`
}

// Good Practice
// function printerError(s) {
//   var count = 0;
//   for(var i = 0; i < s.length; i++) {
//     if (s[i] > "m") {
//       count++;
//     }
//   }
//   return count+"/"+s.length;
// }

// #4: Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything 
// but exactly 4 digits or exactly 6 digits.
function validatePIN (pin) {
  let digitsOnly = pin.split("").filter(elem => elem.match(/[0-9]/));
  return pin.length === digitsOnly.length 
  && (pin.length === 4 || pin.length == 6) ? true : false;
}

// Best Practices
// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }
// But also unreadable

console.log(validatePIN("a1234"))