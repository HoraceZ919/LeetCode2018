/*Sort a linked list using insertion sort.

Algorithm of Insertion Sort:

Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, 
finds the location it belongs within the sorted list, and inserts it there.
It repeats until no input elements remain.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  let dummy = new ListNode(0), pre = dummy, cur = head, next
  while (cur !== null) {
    next = cur.next
    pre = dummy
    while (pre.next && pre.next.val <= cur.val) {
      pre = pre.next
    }
    cur.next = pre.next
    pre.next = cur
    cur = next
  }
  return dummy.next
};
