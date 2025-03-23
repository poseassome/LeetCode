/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
    const DFS = (row, col, len) => {
        if(len === 1) return new Node(grid[row][col], 1);
        const mid = Math.floor(len/2);
        const topLeftNode = DFS(row, col, mid);
        const topRightNode = DFS(row, col+mid, mid);
        const bottomLeftNode = DFS(row+mid, col, mid);
        const bottomRightNode = DFS(row+mid, col+mid, mid);
        const isAllLeaf = topLeftNode.isLeaf && topRightNode.isLeaf && bottomLeftNode.isLeaf && bottomRightNode.isLeaf;
    
        if(isAllLeaf){
            if(topLeftNode.val && topRightNode.val && bottomLeftNode.val && bottomRightNode.val) return new Node(1,1);
            if(!topLeftNode.val && !topRightNode.val && !bottomLeftNode.val && !bottomRightNode.val) return new Node(0,1);
        }
        return new Node(1, 0, topLeftNode, topRightNode, bottomLeftNode, bottomRightNode);
    }
    return DFS(0, 0, grid.length);
};