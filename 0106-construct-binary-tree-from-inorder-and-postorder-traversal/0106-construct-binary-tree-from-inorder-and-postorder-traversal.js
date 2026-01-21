/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let postIndex = postorder.length - 1;
    let map = new Map();
    inorder.forEach((val, idx) => map.set(val, idx));

    const helper = (left, right) => {
        if(left > right) return null;

        let rootVal = postorder[postIndex--];
        let root = new TreeNode(rootVal);
        let idx = map.get(rootVal);

        root.right = helper(idx+1, right);
        root.left = helper(left, idx-1);

        return root;
    }

    return helper(0, inorder.length-1);
};