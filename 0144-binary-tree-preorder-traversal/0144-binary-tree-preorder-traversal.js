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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let answer = [];
    function DFS(root){
        if(root !== null){
            answer.push(root.val);
            DFS(root.left);
            DFS(root.right);
        }
    }
    DFS(root);
    return answer;
};