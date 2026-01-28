/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
    let cnt = 0;
    let temp = head;
    let currStatus = false;
    let set = new Set(nums);

    while(temp){
        if(set.has(temp.val)){
            if(currStatus === false){
                cnt++;
                currStatus = true;
            }
            temp = temp.next;
            continue;
        } else currStatus = false; 
        temp = temp.next;
    }
    return cnt;
};