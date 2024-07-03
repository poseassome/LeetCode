/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let prev = null, cur = head, next = head;
    for(let i=1; i<left; i++){
        prev = cur;
        cur = cur.next;
    }
    let prev2 = prev, cur2 = cur;
    for(let i=left; i<=right; i++){
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    if(prev2 !== null) prev2.next = prev;
    else head = prev;
    cur2.next = cur;
    return head;
};