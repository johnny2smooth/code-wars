// #1
function divisors(integer) {
  let divisors = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.length > 0 ? divisors : `${integer} is prime`;
}

// #2
function solution(string) {
  let str = string;
  let array = [];
  if (str.length % 2 !== 0) {
    str = string + '_';
  }
  for (let i = 0; i < string.length; i += 2) {
    array.push(str.slice(i, i + 2));
  }
  return array;
}

// #3
function oddOrEven(array) {
  if (array.length === 0) {
    return 'even';
  }
  let total = array.reduce((prev, curr) => {
    return prev + curr;
  });
  return total % 2 === 0 ? 'even' : 'odd';
}

// #4
function solution(str, ending) {
  if (ending === '') {
    return true;
  }
  let length = ending.length;
  return str.slice(-length) === ending ? true : false;
}
