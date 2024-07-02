/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const DFS = (node, list) => {
        list.push(node.val);
        if(node.children){
            for(let i=0; i<node.children.length; i++){
                DFS(node.children[i], list);
            }
        }
        return list;
    }
    if(!root) return [];
    return DFS(root, []);
};