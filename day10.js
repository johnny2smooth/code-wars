// Hello! Long time no see
function findMissingLetter(array) {
  let charArr = array.map((elem) => elem.charCodeAt());
  let missingLetter;
  for (let i = 0; i < array.length; i++) {
    if (charArr[i + 1] - charArr[i] == 2) {
      missingLetter = charArr[i] + 1;
    }
  }
  return String.fromCharCode(missingLetter);
}

// #2

function findUniq(arr) {
  let repeated = arr.filter((item, index) => arr.indexOf(item) !== index);
  return arr.filter((item) => item !== repeated[0])[0];
}

// best
// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }

// #3 sort the odd
function sortArray(array) {
  let oddMap = {};
  let oddArr = array.filter((elem) => elem % 2 !== 0).sort();
  let index = 0;
  let sorted = array.map((elem, i) => {
    if (elem % 2 !== 0) {
      oddMap[i] = elem;
    }
    return elem;
  });
  console.log(oddMap);
  console.log(oddArr);
  for (let i = 0; i < array.length; i++) {
    if (oddMap[i]) {
      array[i] = oddArr[index];
      index++;
    }
  }
  return array;
}

// best
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
