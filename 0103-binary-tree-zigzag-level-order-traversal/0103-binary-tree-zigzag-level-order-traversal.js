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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let res = [];
    let level = 0;
    const travelsal = (cur, curlv) => {
        if(res[curlv] === undefined) res[curlv] = [];
        if(curlv%2 !== 0) res[curlv].unshift(cur.val);
        else res[curlv].push(cur.val);
        cur.left && travelsal(cur.left, curlv+1);
        cur.right && travelsal(cur.right, curlv+1);
    }
    travelsal(root, level);
    return res;
};