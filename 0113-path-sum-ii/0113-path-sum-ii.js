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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const DFS = (root, target, sum, arr, res) => {
        if(!root) return res;
        sum = sum + root.val;
        arr.push(root.val);
        if(!root.left && !root.right){
            if(sum === target) res.push([...arr]);
        }
        DFS(root.left, target, sum, arr, res);
        DFS(root.right, target, sum, arr, res);
        arr.pop();
        return res;
    }

    const array = DFS(root, targetSum, 0, [], []);
    return array;
};