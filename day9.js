
const isValid = (s) => {
  const stack = [];
  
  for (let i = 0; i < s.length; i += 1) {
    const top = stack[stack.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }
  
  return stack.length === 0;
};

// solution 2
// const isValid = (s) => {
//   const stack = [];
//   const openSet = new Set(['(', '{', '[']);
//   const closeOpenMap = new Map([
//     [')', '('],
//     ['}', '{'],
//     [']', '['],
//   ]);
  
//   for (let i = 0; i < s.length; i += 1) {
//     if (openSet.has(s[i])) {
//       stack.push(s[i]);
//     } else {
//       const pop = stack.pop();
//       if (pop !== closeOpenMap.get(s[i])) {
//         return false;
//       }
//     }
//   }
  
//   return stack.length === 0;
// };

// solution 3
// const isValid = (s) => {
//   const stack = [];
//   const map = new Map([
//     ['(', ')'],
//     ['[', ']'],
//     ['{', '}']
//   ]);

//   for (let i = 0 ; i < s.length ; i += 1) {
//     if (map.has(s[i])) {
//       stack.push(map.get(s[i]));
//     } else if (s[i] !== stack.pop()) {
//       return false;
//     } 
//   }

//   return stack.length === 0;
// };

