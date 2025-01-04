/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let pre = 0, stack = [], cur = root;
    while(stack.length || cur){
        if(cur){
            stack.push(cur);
            cur = cur.right;
        } else {
            cur = stack.pop();
            cur.val += pre;
            pre = cur.val;
            cur = cur.left;
        }
    }
    return root;
};