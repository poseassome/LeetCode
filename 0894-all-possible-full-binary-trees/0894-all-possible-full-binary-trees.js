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
var allPossibleFBT = function(n) {
    if(n === 1) return [new TreeNode(0)];
    let arr = [];
    for(let i=1; i<n; i+=2){
        const left = allPossibleFBT(i);
        const right = allPossibleFBT(n-i-1);
        for(let L=0; L<left.length; L++){
            for(let R=0; R<right.length; R++){
                const root = new TreeNode(0);
                root.left = left[L];
                root.right = right[R];
                arr.push(root);
            }
        }
    }
    return arr;
};