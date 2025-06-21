/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const DFS = (node, lv, res) => {
        if(!node) return;
        if(lv === res.length) res.push([]);
        res[lv].push(node.val);
        for(const n of node.children) DFS(n, lv+1, res);
    }

    let res = [];
    DFS(root, 0, res);
    return res;
};