const inputFilePath = '/sample.txt';
const input = require('fs')
    .readFileSync(__dirname + inputFilePath)
    .toString()
    .trim()
    .split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(input);
//# sourceMappingURL=Main.js.map