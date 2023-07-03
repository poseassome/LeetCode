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
var findSecondMinimumValue = function(root) {
    let answer = Infinity;
    const DFS = (node) => {
        if(!node) return ;
        if(node.val > root.val && node.val < answer) answer = node.val;
        DFS(node.left);
        DFS(node.right);
    }
    DFS(root);
    if(answer === Infinity) answer = -1;
    return answer;
};