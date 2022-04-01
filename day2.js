// #1: return the length of the shortest word(s) in the string
function findShort(string){
  return string.split(" ").map(elem => elem.length).sort((a,b) => a - b)[0]
}

// "Best Practices"
// function findShort(s){
//   return Math.min.apply(null, s.split(' ').map(w => w.length));
// }

// function findShort(s){
//   return Math.min(...s.split(" ").map (s => s.length));
// }

// #2: Jaden Casing Strings
let string = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
  return this.split(" ").map(elem => elem[0].toUpperCase() + elem.slice(1)).join(" ")
};

// "Best Practices"
// String.prototype.toJadenCase = function () { 
//   return this.split(" ").map(function(word){
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }).join(" ");
// }

// #3: Complementary DNA
function DNAStrand(dna){
  let sequence = {
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G"
  }
  return dna.split("").map(elem => sequence[elem]).join("")
}

// "Best Practices"
// let pairs = {A:'T',T:'A',C:'G',G:'C'};
// const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

// #4: Credit Card Mask
function maskify(cc) {
  return cc.length <= 4 ? cc 
  : cc.slice(0, cc.length - 4).replace(/./g, "#") + cc.slice(cc.length - 4)
}

// "Best Practices"
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }

// function maskify(cc) {
//   return cc.replace(/.(?=....)/g, '#');
// }

// #5: Beginner Series #3 Sum of Numbers;
function getSum( a,b ){
  let total = 0;
  if( a > b){
    for(let i = b; i <= a; i++){
      total += i
    }
  } else {
    for(let i = a; i <= b; i++){
      total += i
    }
  }
  return total
}

// "Best Practicees"
// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//       max = Math.max(a, b);
//   return (max - min + 1) * (min + max) / 2;
// }