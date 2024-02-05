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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    let level = 1, queue = [root];
    while(queue.length){
        let next = [];
        for(const node of queue){
            if(node.left) next.push(node.left);
            if(node.right) next.push(node.right);
        }
        if(level%2 === 0){
            let [i, j] = [0, queue.length-1];
            while(i<j){
                [queue[i].val, queue[j].val] = [queue[j].val, queue[i].val];
                i++;
                j--;
            }
        }
        queue = [...next];
        level++;
    }
    return root;
};