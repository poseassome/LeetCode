/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let less = new ListNode(0), more = new ListNode(0);
    let lessHead = less, moreHead = more;
    while(head){
        if(head.val<x){
            less.next = head;
            less = less.next;
        } else {
            more.next = head;
            more = more.next;
        }
        head = head.next;
    }
    more.next = null;
    less.next = moreHead.next;
    return lessHead.next;
};