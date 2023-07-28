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
var mergeNodes = function(head) {
    let now = head;
    while(now){
        if(now.val === 0){
            let next = now.next;
            while(next && next.val !== 0){
                now.val += next.val;
                next = next.next;
            }
            if(next.val === 0 && next.next === null) next = null;
            now.next = next;
            now = now.next;
        }
    }
    return head;
};