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
 */
var CBTInserter = function(root) {
    const queue = [root];
    this.root = root;
    this.stack = [];
    while(queue.length){
        const size = queue.length;
        for(let i=0; i<size; i++){
            const node = queue.shift();
            const {left, right} = node;
            if(!left || !right){
                this.stack.push(node);
                continue;
            }
            queue.push(left, right);
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {
    const node = this.stack[0];
    if(node.left){
        node.right = new TreeNode(val);
        this.stack.shift();
        this.stack.push(node.left, node.right);
    } else node.left = new TreeNode(val);
    return node.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root;
};

/** 
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */