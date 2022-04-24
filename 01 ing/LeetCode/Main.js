/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const arr = [1, 2, 3, 4];
const head = new ListNode(arr[0]);
let curr = head;
for (let i = 1; i < arr.length; i++) {
  curr.next = new ListNode(arr[i]);
  curr = curr.next;
}

const pairSum = function (head) {
  let slow = head;
  let fast = head.next;
  const stack = [];
  while (fast && slow) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next?.next;
  }
  let maxSum = 0;
  while (slow) {
    const sum = slow.val + stack.pop();
    maxSum < sum ? (maxSum = sum) : null;
    slow = slow.next;
  }
  return maxSum;
};

console.log(pairSum(head));
