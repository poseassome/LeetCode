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
var widthOfBinaryTree = function(root) {
    if(!root) return 0;

    let maxWidth = 0;
    let queue = [];
    queue.push([root, 0]);
    while(queue.length){
        const size = queue.length;
        const min = queue[0][1];
        let first = 0, last = 0;
        for(let i=0; i<size; i++){
            let cur = queue[0][1] - min;
            const node = queue[0][0];
            queue.shift();

            if(i === 0) first = cur;
            if(i === size - 1) last = cur;
            if(node.left) queue.push([node.left, cur*2 + 1]);
            if(node.right) queue.push([node.right, cur*2 + 2]);
        }
        maxWidth = Math.max(maxWidth, (last-first+1));
    }
    return maxWidth;
};