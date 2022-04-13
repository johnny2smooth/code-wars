// #1: Binary addition
function narcissistic(value) {
  let arr = value.toString().split("").map(elem => +elem);
  console.log(arr)
  return arr.reduce((acc, curr) => acc + Math.pow(curr, arr.length), 0) == value ? true : false;
}

// Best Practices
// function narcissistic(value) {
//   return value.toString()
//               .split('')
//               .map( (x,i,arr) => x ** arr.length)
//               .reduce( (a,b)=> +a + +b) 
//                === value
// }

// #2: Sum of odd numbers
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

// I couldn't figure this one out on my own, but its pretty simple.

// #3: Detect Pangram
function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const str = string.toLowerCase();
  
  for (let i = 0; i < alphabet.length-1; i += 1) {
    if (str.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  
  return true;
}

// Again didn't solve...

// #4: Number of people in the bus
var number = function(busStops){
  let on = 0;
  let off = 0;
  for(let i = 0; i < busStops.length; i++){
    on += busStops[i][0];
    off += busStops[i][1]
  }
  return on - off
}

// Best practices
// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

