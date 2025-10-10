/**
 * @param {number[]} encoding
 */
var RLEIterator = function(encoding) {
    this.arr = encoding;
    this.itrSum = 0;
    this.itrPtr = 0;
};

/** 
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
    this.itrSum += n;
    
    while(this.arr[this.itrPtr] < this.itrSum){
        this.itrSum -= this.arr[this.itrPtr];
        this.itrPtr += 2;
    }
    if (this.itrPtr >= this.arr.length) return -1;
    return this.arr[this.itrPtr+1];
};

/** 
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */