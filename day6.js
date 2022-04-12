// #1: Unique in Order
var uniqueInOrder=function(iterable){
  let unique = [];
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable[i + 1]){
      unique.push(iterable[i])
    }
  }
  return unique
}
// Another solution
// var uniqueInOrder=function(iterable){
//   return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

// #2: to camel case
function toCamelCase(str){
  return str.replace(/[_-]/gi," ").split(" ").map((elem, index) => index > 0 ? elem[0].toUpperCase() + elem.slice(1):elem).join("")
}

// Best practices
// function toCamelCase(str){
//   var regExp=/[-_]\w/ig;
//   return str.replace(regExp,function(match){
//         return match.charAt(1).toUpperCase();
//    });
// }

// #3 Equal side of an array

function findEvenIndex(arr){
  for(let i = 0; i < arr.length; i++){
    let first = arr.slice(0,i).reduce((a,b) => a + b,0)
    let second = arr.slice(i + 1).reduce((a,b) => a + b,0)
    console.log("first",first)
    console.log("second",second)
    if(first == second){
      return i
    }
  }
  return -1
}

// The other best pratices
// function findEvenIndex(arr)
// {
//   var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
//   for(var i = 0; i < arr.length; i++) {
//       if(i > 0) left += arr[i-1];
//       right -= arr[i];
      
//       if(left == right) return i;
//   }
  
//   return -1;
// }