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
var averageOfSubtree = function(root) {
    let res = 0;
    const DFS = root => {
        if(!root) return [0, 0];
        const [leftSum, leftCnt] = DFS(root.left);
        const [rightSum, rightCnt] = DFS(root.right);
        
        const totalSum = leftSum+rightSum+root.val;
        const totalCnt = leftCnt+rightCnt+1;
        if(Math.floor(totalSum/totalCnt) === root.val) res++;
        return [totalSum, totalCnt];
    }
    
    DFS(root);
    return res;
};