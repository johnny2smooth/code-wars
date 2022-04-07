//#1: Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number
//  passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

function solution(number){
  if(number < 0){
    return 0;
  }
  let total = 0;
  for(let i = 1; i < number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      total += i
    }
  }
  return total
}

// "Best Practices"
// function solution(number){
//   var sum = 0;
  
//   for(var i = 1;i< number; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//       sum += i
//     }
//   }
//   return sum;
// }

// #2: Find the odd int
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(array) {
  let obj = {}
  for(let i = 0; i < array.length; i++){
    if(!obj.hasOwnProperty(array[i])){
      obj[array[i]] = 0;
    }
    obj[array[i]] += 1;
  }
  for(prop in obj){
    if(obj[prop] % 2 !== 0) return Number(prop)
  }
}

// I originally gave up because I didn't know how to extract the number I had from my obj
// But! I should have used a for(... in ...) loop to extract that number!!!
// But i like the solution below too. idk if its faster, but it looks like it.

// Best Practices
// function findOdd(arr) {
//   for(let i = 0; i < arr.length; i++){
//     const count = arr.filter(value => value === arr[i]).length;
//     if(count % 2 == 1){
//       return arr[i];
//     }
//   }
//   return -1;
// }

// #3: Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when 
// more than one word is present.

function spinWords(string){
  let arr = string.split(" ").map(elem => {
    if(elem.length >= 5){
      return elem.split("").reverse().join("");
    }
    return elem
  });
  return arr.join(" ")
}

// Best Practices
// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }

// function spinWords(string){
//   return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
// }

// #4: Sum of Digits / Digital Root
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing
//  in this way until a single-digit number is produced.

function digitalRoot(number){
  let total = number.toString().split("").reduce((prev, curr) => prev + +curr, 0);
  return total >= 10 ? digitalRoot(total) : total;
}

// Best Practice
// function digital_root(n) {
//   return (n - 1) % 9 + 1;
// }

// I have no idea how this ^^ works. It must be the digital root equation :)

