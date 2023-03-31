/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let link = '';
    let reverse = '';
    while(head){
        link += head.val;
        reverse = head.val + reverse;
        head = head.next;
    }
    return link === reverse;
};