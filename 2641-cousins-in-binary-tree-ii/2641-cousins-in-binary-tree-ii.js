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
var replaceValueInTree = function(root) {
    const BFS = (node) => {
        if(!node.length) return;

        const arr = [];
        let sum = 0
        node.forEach(el => {
            if(el.left){
                arr.push(el.left)
                sum += el.left.val
            }
            if(el.right){
                arr.push(el.right)
                sum += el.right.val
            }
        })

        node.forEach(el => {
            const localSum = (el.left?.val || 0) + (el.right?.val || 0)
            const cousinsSum = sum - localSum;
            if(el.left) el.left.val = cousinsSum;
            if(el.right) el.right.val = cousinsSum;
        })
        BFS(arr);
    }
    root.val = 0;
    BFS([root]);
    
    return root;
};