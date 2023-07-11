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
var findTilt = function(root) {
    let answer = 0;
    const sumTilt = node => {
        if(!node) return 0;
        const left = sumTilt(node.left);
        const right = sumTilt(node.right);
        const sum = left+right;
        answer += Math.abs(left-right);
        return sum+node.val;
    }
    sumTilt(root);
    return answer;
};