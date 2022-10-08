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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {

    if(!head) return null;
    if(!head.next || left === right) return head;
    
    let curr: ListNode | null = head;
    let counter = 1;
    let cursor: ListNode | null = null;
    //iterate to left
    while(counter < left){
        cursor = curr;
        curr = curr!.next;
        counter++
    }
    
    let prev: ListNode | null = null;
    let next: ListNode | null = null;
    //reverse from left to right
    while(curr && counter <= right){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        counter++
    }
    
    if(cursor){
        cursor!.next = prev;
    } else {
        cursor = prev;
        head = prev;
    }

    
    while(cursor!.next){
        cursor = cursor!.next;
    }
    
    cursor!.next = next;
    return head;
    
};