/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Stack = [], l2Stack = [];
    while(l1){
        l1Stack.push(l1.val);
        l1 = l1.next;
    }
    while(l2){
        l2Stack.push(l2.val);
        l2 = l2.next;
    }
    let link = new ListNode(0);
    while(l1Stack.length || l2Stack.length){
        let sum = 0;
        if(l1Stack.length) sum += l1Stack.pop();
        if(l2Stack.length) sum += l2Stack.pop();
        sum += link.val;
        link.val = sum%10;
        let head = new ListNode(Math.floor(sum/10));
        head.next = link;
        link = head;
    }
    return link.val === 0 ? link.next : link;
};