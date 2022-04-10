// #1: sum two smallest numbers in an array

function sumTwoSmallestNumbers(numbers) {  
  let sorted = numbers.sort((a,b) => a-b);
  return sorted[0] + sorted[1]
}

// best practices
// function sumTwoSmallestNumbers(numbers) {  
//   var [ a, b ] = numbers.sort((a, b) => a - b)
//   return a + b
// }

// #2: Two to One
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

