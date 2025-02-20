/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.node = head;
    this.arr = [];
    while(this.node){
        this.arr.push(this.node.val);
        this.node = this.node.next;
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    const randomNum = Math.floor(Math.random()*this.arr.length);
    return this.arr[randomNum]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */