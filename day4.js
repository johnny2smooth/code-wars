// #1: given an array of 10 integers, create a string that represents a phone #

function createPhoneNumber(numbers){
  return `(${numbers.slice(0,3).join("")}) ${numbers.slice(3,6).join("")}-${numbers.slice(6,10).join("")}`
}

// best practices
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
  
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
  
//   return format;
// }

// the replace string method is really powerful, but i rarely ever use it
// why is that?

// #2: Find the outlier in an array comprising of either entirely even integers or odd integers.
function findOutlier(integers){
  let even = integers.filter(number => number % 2 === 0);
  let odd = integers.filter(number => number % 2 !== 0);
  return odd.length === 1 ? odd[0] : even[0]
}

// best practices
// What i did ^^

// #3: count the number of duplicates that occur in a string. numbers + caps counted
function duplicateCount(text){
  let count = 0
  let arr = text.toLowerCase().split("");
  for(let i = 0; i< text.length; i++){
    if(arr.filter(elem => elem).length > 1){
      count += 1;
    }
  }
  return count;
}

// I flubbed it

// Best solution
// function duplicationCount(text){
//   return text.toLowerCase().split('').filter((val, i, arr) => {
//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//   }).length;
// }

// #4: 
function isValidWalk(walk) {
  if(walk.length !== 10){
    return false
  }
  let count1 = 0;
  let count2 = 0
  let directions = {
    'n': 1,
    's': -1,
    'w': 1,
    'e': -1
  }
  for(let i = 0; i < walk.length; i++){
    if(walk[i] === 'e' || walk[i] === 'w'){
      count2 += directions[walk[i]]
    }
    count1 += directions[walk[i]]
  }
  return count1 === 0 && count2 === 0 ? true : false
}

// Best practices
// function isValidWalk(walk) {
//   var dx = 0
//   var dy = 0
//   var dt = walk.length
  
//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }
  
//   return dt === 10 && dx === 0 && dy === 0
// }

// switch cases!! they kinda legit