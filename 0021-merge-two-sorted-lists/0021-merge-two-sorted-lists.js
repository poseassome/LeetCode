/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    
    const val1 = list1.val;
    const val2 = list2.val;
    let merge;
    if(val1<val2){
        merge = new ListNode(val1);
        merge.next = mergeTwoLists(list1.next, list2);
    } else {
        merge = new ListNode(val2);
        merge.next = mergeTwoLists(list2.next, list1);
    }
    return merge;
};