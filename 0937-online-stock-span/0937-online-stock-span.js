
var StockSpanner = function() {
    this.stack = [], this.index = -1;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.index++;
    while(this.stack.length && this.stack[this.stack.length-1][0] <= price) this.stack.pop();
    let res = this.index - (this.stack.length? this.stack[this.stack.length-1][1] : -1);
    this.stack.push([price, this.index]);
    return res;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */