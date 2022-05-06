const digits = [1, 2, 3];
const plusOne = function (digits) {
  let doAdd = true;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (doAdd) digits[i]++;
    else continue;
    if (digits[i] >= 10) {
      digits[i] -= 10;
    } else doAdd = false;
  }
  if (doAdd) return [1, ...digits];
  else return [...digits];
};
plusOne(digits);
