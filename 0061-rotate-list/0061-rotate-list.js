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
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head;
    let cnt = 1, curr = head;
    while(curr.next){
        curr = curr.next;
        cnt++;
    }

    let tail = curr;    
    let rotations = k%cnt;
    if(rotations === 0) return head;

    let stepsToNewTail = cnt-rotations-1;
    curr = head;
    while(stepsToNewTail){
        curr = curr.next;
        stepsToNewTail--;
    }
    tail.next = head;
    head = curr.next;
    curr.next = null;
    return head;
};