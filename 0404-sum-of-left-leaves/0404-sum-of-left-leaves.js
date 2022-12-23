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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    function tree(node, isleft){
        if(node){
            const {val, left, right} = node;
            if(left || right) return tree(left, true) + tree(right, false);
            else return isleft ? val : 0;
        } else return 0;
    }
    return tree(root, false);
};