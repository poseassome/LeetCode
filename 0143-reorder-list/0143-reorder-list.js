/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let res = [];
    let idx = head;
    while(idx){
        res.push(idx);
        idx = idx.next;
    }
    for(let l=0; l<res.length; l++){
        let r = res.length-1-l;
        if(l >= r){
            res[l].next = null;
            break;
        }
        res[l].next = res[r];
        res[r].next = res[l+1];
    }
};