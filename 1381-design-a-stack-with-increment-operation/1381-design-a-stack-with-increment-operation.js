/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.arr = [];
    this.length = 0;
    this.maxSize = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.length < this.maxSize) {
        this.arr[this.length] = x;
        this.length++;
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.length == 0) return -1;
    else {
        this.length--;
        let last = this.arr[this.length]
        return last;
    }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    if(k > this.length){
        for(let i=0; i<this.length; i++){
            this.arr[i] = this.arr[i]+val;
        }
    } else {
        for(let i=0; i<k; i++){
            this.arr[i] = this.arr[i]+val;
        }
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */