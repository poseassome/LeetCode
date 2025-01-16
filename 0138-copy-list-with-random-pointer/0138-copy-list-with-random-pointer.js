/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let current = head;
    let map = new Map();
    while(current){
        map.set(current, new Node(current.val));
        current = current.next;
    }
    current = head;
    while(current){
        const copy = map.get(current);
        copy.next = map.get(current.next) || null;
        copy.random = map.get(current.random) || null;
        current = current.next;
    }
    return map.get(head);
};