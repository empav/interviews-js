//https://leetcode.com/problems/swap-nodes-in-pairs/

const ListNode = require("./ListNode").ListNode;
const printList = require("./ListNode").printList;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // Check edge case: linked list has 0 or 1 nodes, just return
  if (!head || !head.next) {
    return head;
  }

  let dummy = head.next; // Step 5
  let prev = null; // Initialize for step 3
  while (head && head.next) {
    if (prev) {
      prev.next = head.next; // Step 4
    }
    prev = head; // Step 3

    let nextNode = head.next.next; // Step 2
    head.next.next = head; // Step 1

    head.next = nextNode; // Step 6
    head = nextNode; // Move onto the next pair
  }

  return dummy;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;
const head = a;

printList(swapPairs(head));
