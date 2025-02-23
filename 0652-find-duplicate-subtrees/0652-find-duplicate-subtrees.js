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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = {}, res = [];
    const traverse = node => {
        if(!node) return '';
        const subtree = `${node.val},${traverse(node.left)},${traverse(node.right)}`;
        const cnt = map[subtree] || 0;
        if(cnt === 1) res.push(node);
        map[subtree] = cnt+1;
        return subtree;
    }
    traverse(root);
    return res;
};