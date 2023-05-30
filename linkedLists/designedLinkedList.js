const { printList, ListNode } = require("./ListNode");

var MyLinkedList = function () {
  this.head = null;
  this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) return -1;
  let current = this.head;
  let i = 0;
  while (i !== index) {
    current = current.next;
    i++;
  }
  return current.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new ListNode(val);

  if (this.head) {
    node.next = this.head;
  }
  this.head = node;
  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (!this.head) {
    this.addAtHead(val);
    return;
  }

  let curr = this.head;
  while (curr.next) {
    curr = curr.next;
  }
  const node = new ListNode(val, null);
  curr.next = node;
  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.length) return;
  if (index === this.length) {
    this.addAtTail(val);
    return;
  }
  if (index === 0 || !this.head) {
    this.addAtHead(val);
    return;
  }

  let curr = this.head;
  let prev = null;
  let i = 0;
  while (curr.next) {
    if (i === index) break;
    prev = curr;
    curr = curr.next;
    i++;
  }

  const node = new ListNode(val, curr);
  prev.next = node;
  this.length++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.length || !this.head) return;
  if (index === 0) {
    this.head = this.head.next;
    this.length--;
    return;
  }

  let curr = this.head;
  let prev = null;
  let i = 0;
  while (curr.next) {
    if (i === index) break;
    prev = curr;
    curr = curr.next;
    i++;
  }

  prev.next = curr.next;
  this.length--;
};

/**
 * @return {void}
 */
MyLinkedList.prototype.print = function () {
  const printable = [];
  let curr = this.head;
  while (curr) {
    printable.push(curr.val);
    curr = curr.next;
  }
  console.log("List: ", printable.join("=>"));
};

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(7);
myLinkedList.addAtHead(2);
myLinkedList.addAtHead(1);
myLinkedList.addAtIndex(3, 0);
myLinkedList.print();
myLinkedList.deleteAtIndex(2);
myLinkedList.print();
myLinkedList.addAtHead(6);
myLinkedList.addAtTail(4);
myLinkedList.print();
let val = myLinkedList.get(4);
console.log("node val: ", val);
myLinkedList.addAtHead(4);
myLinkedList.addAtIndex(5, 0);
myLinkedList.addAtHead(6);
myLinkedList.print();
