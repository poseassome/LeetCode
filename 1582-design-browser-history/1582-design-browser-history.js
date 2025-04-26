function ListNode(val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    let node = new ListNode(homepage, null, null);

    this.cur = node;
    this.head = node;
    this.tail = node;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    let node = new ListNode(url, null, null);

    this.cur.next = null;
    this.tail = this.cur;

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.cur = this.tail;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    let cnt = 0;
    while(this.cur.prev !== null && cnt < steps){
        this.cur = this.cur.prev;
        cnt++;
    }
    return this.cur.val;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    let cnt = 0;
    while(this.cur.next !== null && cnt < steps){
        this.cur = this.cur.next;
        cnt++;
    }
    return this.cur.val;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */