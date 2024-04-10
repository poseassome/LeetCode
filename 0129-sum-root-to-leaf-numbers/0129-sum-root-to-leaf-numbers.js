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
var sumNumbers = function(root) {
    if(!root) return 0;
    
    const DFS = (sum, num, root) => {
        if(!root.left && !root.right){
            return sum+num*10+root.val;
        } else {
            num = num*10+root.val;
            if(root.left) sum = DFS(sum, num, root.left);
            if(root.right) sum = DFS(sum, num, root.right);
            return sum;
        }
    }
    
    return DFS(0, 0, root);
};