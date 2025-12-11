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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let paths = [];
    for(let i=0; i<root.length; i++){
        const num = root[i];
        if(num !== null){
            let char = String.fromCharCode("a".charCodeAt(0) + num);
            root[i] = char;
        }
    }
    const DFS = (node, path) => {
        if(!node) return;

        node.val = String.fromCharCode("a".charCodeAt(0) + node.val);
        if(node.val !== 0) path += node.val;
        if(!node.left && !node.right) paths.push(path.split("").reverse().join(""));
        else {
            if (node.left) DFS(node.left, path);
            if (node.right) DFS(node.right, path);
        }
    };
    DFS(root, []);
    return paths.sort()[0];
};