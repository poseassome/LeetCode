/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.size = k;
    this.queue = new Map(); 
    this.fisrt = null;
    this.last = null;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.queue.size+1 > this.size) return false;
    if(!this.last) {
        this.fisrt = 1;
        this.last = 1;
    } else this.last++;
    this.queue.set(this.last, value);
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(!this.queue.size) return false;
    this.queue.delete(this.fisrt);
    this.fisrt++;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(!this.queue.size) return -1;
    return this.queue.get(this.fisrt);
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(!this.queue.size) return -1;
    return this.queue.get(this.last);
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.queue.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.queue.size === this.size;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */