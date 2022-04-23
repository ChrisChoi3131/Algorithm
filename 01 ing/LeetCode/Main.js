const s = "([)]";

const isValid = function (s) {
  const brackets = [];
  const allBrackets = s.split("");
  for (let i = 0; i < allBrackets.length; i++) {
    const bracket = allBrackets[i];
    if (bracket === "(") brackets.push("(");
    else if (bracket === "{") brackets.push("{");
    else if (bracket === "[") brackets.push("[");
    else if (bracket === ")") {
      if (brackets[brackets.length - 1] === "(") brackets.pop();
      else return false;
    } else if (bracket === "}") {
      if (brackets[brackets.length - 1] === "{") brackets.pop();
      else return false;
    } else if (bracket === "]") {
      if (brackets[brackets.length - 1] === "[") brackets.pop();
      else return false;
    }
  }
  return brackets.length ? false : true;
};
console.log(isValid(s));
