//https://leetcode.com/problems/reverse-linked-list-ii/editorial/

const ListNode = require("./ListNode").ListNode;
const printList = require("./ListNode").printList;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const dummy = new ListNode(0);
  dummy.next = head;

  let before = dummy;

  for (let i = 1; i < left; i++) {
    before = before.next;
  }

  let prev = before;
  let curr = before.next;

  for (let i = left; i <= right; i++) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  before.next.next = curr;
  before.next = prev;

  return dummy.next;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);
const f = new ListNode(6);
const g = new ListNode(7);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
const head = a;

printList(reverseBetween(head, 3, 6));
