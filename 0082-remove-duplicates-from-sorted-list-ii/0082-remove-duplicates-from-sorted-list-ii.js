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
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;
    while(prev.next){
        let cur = prev.next;
        while(cur.next && cur.val === cur.next.val) cur = cur.next;
        if(prev.next === cur) prev = prev.next;
        else prev.next = cur.next;
    }
    return dummy.next;
};