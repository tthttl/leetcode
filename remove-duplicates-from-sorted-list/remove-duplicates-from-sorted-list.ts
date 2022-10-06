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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head) return null;
    if(!head.next) return head;
    
    let slow = head;
    let fast = head;
    
    while(fast){
        if(fast.val === slow.val){
            fast = fast.next;
            if(!fast){
                slow.next = null;
            }
        } else {
            slow.next = fast;
            slow = slow.next;
            fast = fast.next;
        }
    }
    
    return head;
};