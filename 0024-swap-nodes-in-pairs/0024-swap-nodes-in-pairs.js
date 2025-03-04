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
var swapPairs = function(head) {
    let node = new ListNode(0);
    node.next = head;
    let cur = head, prev = node;
    while(cur !== null && cur.next !== null){
        let first = cur, second = cur.next;
        let temp = second.next;
        second.next = first;
        first.next = temp;
        prev.next = second;
        prev = first;
        cur = first.next;
    }
    return node.next;
};