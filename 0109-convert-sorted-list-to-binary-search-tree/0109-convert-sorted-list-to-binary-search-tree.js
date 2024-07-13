/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let arr = [];
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    const tree = (start, end) => {
        if(start > end) return null;
        const mid = Math.floor((start+end)/2);
        const root = new TreeNode(arr[mid]);
        root.left = tree(start, mid-1);
        root.right = tree(mid+1, end);
        return root;
    }
    let start = 0, end = arr.length-1;
    return tree(start, end);
};