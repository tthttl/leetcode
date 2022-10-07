/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function pairSum(head: ListNode | null): number {
  if(!head) return 0;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  //find middle
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  //reverse second half
  let reversedHead = slow!.next;
  let prev: ListNode | null = null;
  let next: ListNode | null = null;
  while (reversedHead) {
    next = reversedHead.next;
    reversedHead.next = prev;
    prev = reversedHead;
    reversedHead = next;
  }

  //create pairs
  let start:ListNode | null = head;
  let max = 0;
  while (prev) {
    if (start!.val + prev.val > max) {
      max = start!.val + prev.val;
    }
    start = start!.next;
    prev = prev.next;
  }

  return max;
}
