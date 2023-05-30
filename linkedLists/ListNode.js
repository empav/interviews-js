function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}
function printList(head) {
  let node = head;
  const arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  console.log("List: ", arr.join("=>"));
}

exports.ListNode = ListNode;
exports.printList = printList;
