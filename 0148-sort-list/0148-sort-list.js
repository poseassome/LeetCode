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
var sortList = function(head) {
    let arr = [], val = head;
    while(val){
        arr.push(val.val);
        val = val.next;
    }
    arr = arr.sort((a,b) => a-b);
    val = head;
    for(const x of arr){
        val.val = x;
        val = val.next;
    }
    return head;
};