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
var insertionSortList = function(head) {
    let dummy = new ListNode();
    while(head !== null){
        let node = dummy;
        while(node.next && node.next.val < head.val) node = node.next;
        let temp = head.next;
        head.next = node.next;
        node.next = head;
        head = temp;
    }
    return dummy.next;
};