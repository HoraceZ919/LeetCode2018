/*Sort a linked list in O(n log n) time using constant space complexity.

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
var sortList = function(head) {
  if (!head || !head.next) return head
  let [first, second] = splitList(head)
  first = sortList(first)
  second = sortList(second)
  return mergeList(first, second)

  function splitList(head) {
    let pre = null, slow = head, fast = head
    while (fast && fast.next) {
      pre = slow
      slow = slow.next
      fast = fast.next.next
    }
    pre.next = null
    return [head, slow]
  }

  function mergeList(first, second) {
    let preHead = new ListNode(), pre = preHead
    while (first && second) {
      if (first.val <= second.val) {
        pre.next = first
        pre = first
        first = first.next
      } else {
        pre.next = second
        pre = second
        second = second.next
      }
    }
    pre.next = first || second
    return preHead.next
  }
};
