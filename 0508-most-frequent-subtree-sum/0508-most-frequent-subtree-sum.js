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
var findFrequentTreeSum = function(root) {
    let map = new Map();
    const DFS = (node, map) => {
        if(!node) return 0;
        let left = DFS(node.left, map);
        let right = DFS(node.right, map);
        let sum = left+right+node.val;
        if(!map.has(sum)) map.set(sum, 0);
        map.set(sum, map.get(sum)+1);
        return sum;
    }
    DFS(root, map);
    let max = Math.max(...map.values());
    let arr = [];
    for(const [key, val] of map){
        if(max === val) arr.push(key);
    }
    return arr;
};