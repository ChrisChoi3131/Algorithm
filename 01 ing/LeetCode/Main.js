class ValidWordAbbr {
  constructor(words) {
    this.wordAbbrs = new Map();
    words.forEach(word => {
      const [key, value] = this.generateWordAbbr(word);
      if (this.wordAbbrs.has(key) && this.wordAbbrs.get(key) !== value) this.wordAbbrs.set(key, '');
      else this.wordAbbrs.set(key, value);
    });
  }
}
ValidWordAbbr.prototype.generateWordAbbr = function (word) {
  if (word.length <= 2) {
    return [word, word];
  } else {
    const key = word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
    return [key, word];
  }
};
ValidWordAbbr.prototype.isUnique = function (word) {
  const [key, value] = this.generateWordAbbr(word);
  if (this.wordAbbrs.has(key)) {
    const wordSaved = this.wordAbbrs.get(key);
    if (word === wordSaved) return true;
    else return false;
  } else return true;
};

const validWordAbbr = new ValidWordAbbr(['a', 'a']);
console.log(validWordAbbr.isUnique('a'));
console.log(validWordAbbr.isUnique('door'));
console.log(validWordAbbr.isUnique('cart'));
// console.log(validWordAbbr.isUnique('make'));
console.log(validWordAbbr.isUnique('cake'));
