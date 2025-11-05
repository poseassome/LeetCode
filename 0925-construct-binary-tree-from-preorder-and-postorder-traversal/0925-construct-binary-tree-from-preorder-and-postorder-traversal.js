/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    let tree = new TreeNode(preorder[0]);
    let stack = [];
    stack.push(tree);
    let pre = 1, post = 0;
    while(stack.length){
        if(stack[stack.length-1].val === postorder[post]){
            stack.pop();
            post++;
            continue;
        }
        let node = new TreeNode(preorder[pre++]);
        if(!stack[stack.length-1].left) stack[stack.length-1].left = node;
        else stack[stack.length-1].right = node;
        stack.push(node);
    }
    return tree;
};