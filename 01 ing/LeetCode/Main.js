const s = "(()";
// const s = "(()()";
// const s = ")(((((()())()()))()(()))(";
//         0123456789012345678901234
/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  const brackets = s.split("");
  const stack = [];
  const hashmap = {};
  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "(") {
      stack.push(i);
    } else if (brackets[i] === ")" && stack.length) {
      const idxLeftBracket = stack.pop();
      if (brackets[i - 1] === "(") {
        hashmap[i] = hashmap[idxLeftBracket - 1] ? hashmap[idxLeftBracket - 1] + 2 : 2;
      } else if (brackets[i - 1] === ")") {
        hashmap[i] = hashmap[i - 1] + 2 + (hashmap[idxLeftBracket - 1] ? hashmap[idxLeftBracket - 1] : 0);
      }
    }
  }
  return Object.keys(hashmap).length ? Math.max(...Object.values(hashmap)) : 0;
};

console.log(longestValidParentheses(s));
