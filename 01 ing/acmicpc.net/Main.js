
const inputFilePath = '/sample.txt';
const input = require('fs')
  .readFileSync(process.platform == 'linux' ? '/dev/stdin' : __dirname + inputFilePath, 'utf8')
  .toString()
  .trim()
  .split('\n');

function RecurPermutations(arr, left, right) {
  // arr[left], ..., arr[right]
  if (left === right) {
    for (let i = 0; i <= right; i++) {
      console.log(arr[i]);
    }
  } else {

  }
}
const main = () => {
  // a 한 글자의 순열 (Permutations)

  // a
  const arr1 = ['a'];
  RecurPermutations(arr1, 0, 0);


  // ab 두 글자의 순열 (Permutations)

  // a b
  // b a
  const arr2 = ['a', 'b'];
  RecurPermutations(arr2, 0, 1);


  // abc 3 글자의 순열 (Permutations)

  // a b c
  // a c b
  // b a c
  // b c a
  // c b a
  // c a b
  const arr3 = ['a', 'b', 'c'];
  RecurPermutations(arr3, 0, 2);
};

main();
