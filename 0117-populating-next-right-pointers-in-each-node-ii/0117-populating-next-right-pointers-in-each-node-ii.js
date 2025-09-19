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
    let queue = [root];
    let level = [];
    while(queue.length){
        let node = queue.shift();
        if(node.left) level.push(node.left);
        if(node.right) level.push(node.right);
        if(!queue.length){
            for(let i=0; i<level.length-1; i++){
                level[i].next = level[i+1];
            }
            queue = [...level];
            level = [];
        }
    }
    return root;
};