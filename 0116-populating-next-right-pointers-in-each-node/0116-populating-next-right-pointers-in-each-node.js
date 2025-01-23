/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(!root) return root;
    let left = root;
    while(left.left){
        let head = left;
        while(head){
            head.left.next = head.right;
            if(head.next) head.right.next = head.next.left;
            head = head.next;
        }
        left = left.left;
    } 
    return root;
};