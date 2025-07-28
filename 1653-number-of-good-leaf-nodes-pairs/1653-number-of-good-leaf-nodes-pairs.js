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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let cnt = 0;
    const DFS = node => {
        if(!node) return [];
        if(!node.left && !node.right) return [1];
        const left = DFS(node.left), right = DFS(node.right);
        for(const x of left){
            for(const y of right){
                if(x+y <= distance) cnt++;
            }
        }
        return [...left, ...right].map(el => el + 1).filter(el => el <= distance);
    }

    DFS(root);
    return cnt;
};