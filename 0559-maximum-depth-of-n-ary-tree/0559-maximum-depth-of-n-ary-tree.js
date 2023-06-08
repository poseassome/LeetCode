/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    const DFS = node => {
        if(!node) return 0;
        let maxDep = 0;
        for(let i=0; i<node.children.length; i++){
            const dep = DFS(node.children[i]);
            maxDep = Math.max(maxDep, dep);
        }
        return maxDep+1;
    }
    return DFS(root);
};