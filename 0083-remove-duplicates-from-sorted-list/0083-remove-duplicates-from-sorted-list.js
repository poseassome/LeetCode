/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return head;
    let start = head;
    while(start !== null && start.next !== null){
        if(start.next.val === start.val) start.next = start.next.next;
        else start = start.next;
    }
    return head;
};