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

function deleteMiddle(head: ListNode | null): ListNode | null {
    if(head.next === null){
        return null;
    }
    let previous = head;
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        previous = slow;
        slow = slow.next;
        fast = fast.next.next;
        console.log(slow.val)
    }
    previous.next = slow.next;
    return head;
};