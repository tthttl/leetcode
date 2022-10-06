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
    
    let curr = head;
    
    while(curr){
        if(curr.next && curr.val === curr.next.val){
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    
    return head;
};