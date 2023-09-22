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
var insertGreatestCommonDivisors = function(head) {
    const Funcgcd = (a, b) => b ? Funcgcd(b, a%b) : a;
    let ele = head;
    while(head && head.next){
        const gcd = Funcgcd(head.val, head.next.val);
        const tail = head.next;
        head.next = new ListNode(gcd, tail);
        head = head.next.next;
    }
    return ele;
};