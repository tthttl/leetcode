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

function isPalindrome(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let prev: ListNode | null = null;
  let next: ListNode | null = null;

  while(slow){
    next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  while(head && prev){
    if(head.val !== prev!.val){
        return false;
    }
    head = head.next;
    prev = prev.next;
  }

  return true;

}