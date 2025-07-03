/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const nodes = {};
    const childNodes = new Set();
    for(const [parent, child, isLeft] of descriptions){
        if(!nodes[parent]) nodes[parent] = new TreeNode(parent);
        if(!nodes[child]) nodes[child] = new TreeNode(child);
        if(isLeft) nodes[parent].left = nodes[child];
        else nodes[parent].right = nodes[child];
        childNodes.add(child);
    }
    let root = null;
    for(const [parent, , ] of descriptions){
        if(!childNodes.has(parent)){
            root = nodes[parent];
            return root;
        }
    }
    return root;
};