/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    const DFS = (start, end) => {
        let res = [];
        if(start > end) return [null];
        for(let i=start; i<=end; i++){
            const leftNode = DFS(start, i-1);
            const rightNode = DFS(i+1, end);
            for(const left of leftNode){
                for(const right of rightNode){
                    const node = new TreeNode(i, left, right);
                    res.push(node);
                }
            }
        }
        return res;
    }
    return DFS(1, n);
};