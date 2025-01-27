/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let map = new Map();
    let cur = head, cnt = 0;
    while(cur){
        map.set(++cnt, cur);
        cur = cur.next;
    }
    const entire = Math.trunc(cnt/k);
    const part = cnt%k;
    let res = [];
    let el = 1;
    for(let i=1; i<=k; i++){
        if(entire || i <= part){
            res.push(map.get(el));
            if(i>1) map.get(el-1).next = null;
        } else res.push(null);
        if(entire) el += entire;
        if(i <= part) el++;
    }
    return res;
};