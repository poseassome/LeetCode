/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let cur = list1;
    let start = null, end = null;
    let cnt = 0;

    while(cur){
        if(cnt < a) start = cur;
        if(cnt > b){
          end = cur;
          break;
        }
        cnt++;
        cur = cur.next;
    }
    cur = list2;
    while(cur && cur.next){
        cur = cur.next;
    }
    cur.next = end;
    start.next = list2;
    return list1;
};