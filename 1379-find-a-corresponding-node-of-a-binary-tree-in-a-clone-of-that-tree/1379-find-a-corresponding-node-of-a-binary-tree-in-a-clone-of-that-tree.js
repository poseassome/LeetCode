/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    const DFS = (origin, clone) => {
        if(!origin) return;
        if(origin === target) return clone;
        return DFS(origin.left, clone.left) || DFS(origin.right, clone.right);
    }
    return DFS(original, cloned);
};