/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let l1 = new ListNode(9);
let current = l1;
for (let i = 0; i < 6; i++) {
  current.next = new ListNode(9);
  current = current.next;
}
let l2 = new ListNode(9);
current = l2;
for (let i = 0; i < 4; i++) {
  current.next = new ListNode(9);
  current = current.next;
}
const addTwoNumbers = function (l1, l2) {
  const List = new ListNode(0);
  let current = List;
  let sum = 0;
  let carry = 0;
  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }
    current.next = new ListNode(sum);
    current = current.next;
    sum = carry;
    carry = 0;
  }
  return List.next;
};
console.log(addTwoNumbers(l1, l2));
