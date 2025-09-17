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
var levelOrder = function(root) {
    const queue = [root];
    const res = [];
    while(queue.length){
        const levelSize = queue.length;
        const levelArr = [];
        for(let i=0; i<levelSize; i++){
            const node = queue.shift();
            if (!node) continue;
            queue.push(node.left);
            queue.push(node.right);
            levelArr.push(node.val);
        }
        if(levelArr.length) res.push(levelArr);
    }
    return res;
};