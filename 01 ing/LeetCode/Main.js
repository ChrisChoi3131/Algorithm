const logs = ["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo", "a2 act car"];

const reorderLogFiles = function (logs) {
  const logDigit = [];
  const logLetter = [];
  logs.forEach((log) => {
    const [prefix, ...words] = log.split(" ");
    if (words[0].charCodeAt() >= 48 && words[0].charCodeAt() <= 57) {
      logDigit.push(log);
    } else {
      logLetter.push(log);
    }
  });
  logLetter.sort((logFirst, logSecond) => {
    const [prefixOfFirst, ...wordsOfFirst] = logFirst.split(" ");
    const [prefixOfSecond, ...wordsOfSecond] = logSecond.split(" ");
    for (let i = 0; i < Math.max(wordsOfFirst.length, wordsOfSecond.length); i++) {
      if (wordsOfFirst[i] < wordsOfSecond[i]) return -1;
      else if (wordsOfFirst[i] > wordsOfSecond[i]) return 1;
      else {
        if (i < Math.min(wordsOfFirst.length, wordsOfSecond.length) - 1) continue;
        else {
          if (wordsOfFirst.length < wordsOfSecond.length) return -1;
          else if (wordsOfFirst.length > wordsOfSecond.length) return 1;
          else {
            if (prefixOfFirst < prefixOfSecond) return -1;
            else if (prefixOfFirst > prefixOfSecond) return 1;
            else return 0;
          }
        }
      }
    }
  });
  return logLetter.concat(logDigit);
};
console.log(reorderLogFiles(logs));
