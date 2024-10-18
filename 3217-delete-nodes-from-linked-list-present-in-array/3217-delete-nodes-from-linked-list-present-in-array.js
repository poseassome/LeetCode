/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    const set = new Set(nums);
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    while(prev.next){
        if(set.has(prev.next.val)) prev.next = prev.next.next;
        else prev = prev.next;
    }
    return dummy.next;
};