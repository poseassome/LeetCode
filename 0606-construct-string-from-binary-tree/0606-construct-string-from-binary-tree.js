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
 * @return {string}
 */
var tree2str = function(root) {
    if(!root) return '';
    
    const val = root.val;
    const left = tree2str(root.left);
    const right = tree2str(root.right);

    if(!left && !right) return `${val}`;
    if(!right) return `${val}(${left})`;
    return `${val}(${left})(${right})`;
};