//#1

// Mumbling 7kyu
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My solution!

function accum(string){
  return string.toUpperCase().split("").map((elem, i) => elem + elem.toLowerCase().repeat(i)).join("-")
}

// "Best practices"
// function accum(s) {
//   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

// #2

// You are going to be given a word. 
// Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

// My solution

function getMiddle(string){
  return string.length % 2 == 0 ? string[string.length / 2 - 1] + string[string.length / 2 ]
  : string[Math.ceil(string.length / 2) - 1];
}

// "Best Practices"

// function getMiddle(s){
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

// #3 A square of squares
// Task: Given an integral number, determine if it's a square number
// My solution

function isSquare(x){
  if(x == 0){
    return true
  }
  return  x % Math.sqrt(x) == 0;
}

// "Best practices"
// function isSquare(x){
//   return Math.sqrt(x) % 1 == 0;
// }

// ^^ that one is nice wit it

// #4: Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram.

function isIsogram(str){
  let arr = str.toLowerCase().split("");
  let unique = new Set(arr)
  return unique.size == arr.length ? true : false;
}

// "Best Practices"
// function isIsogram(str){ 
//   return !/(\w).*\1/i.test(str)
// }

// function isIsogram(str){
//   return new Set(str.toUpperCase()).size == str.length;
// }

// #5: Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's.
//  The method must return a boolean and be case insensitive.

function xo(string){
  let countX = 0;
  let countO = 0;

  let arr = string.toUpperCase().split("").filter(elem => elem == "X" || elem == "O");
  for(let i = 0; i < arr.length; i++){
    arr[i] == "X" ? countX++ : countO++
  }
  return countX == countO ? true : false
}

// "Best Practices"
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }