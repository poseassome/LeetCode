/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const stack = [root], arr = [];
    while(stack.length && root){
        let node = stack.pop();
        for(let i=0; i<node.children.length; i++){
            stack.push(node.children[i]);
        }
        arr.unshift(node.val);
    }
    return arr;
};