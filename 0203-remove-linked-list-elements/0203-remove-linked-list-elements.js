/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return head;
    while(head && head.val === val) head = head.next;
    let node = head;
    let prev = null;
    while(node){
        const next = node.next;
        if(node.val === val) prev.next = next;
        else prev = node;
        node = next;
    }
    return head;
};