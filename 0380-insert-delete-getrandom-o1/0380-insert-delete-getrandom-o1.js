
var RandomizedSet = function() {
    this.arr = [];
    this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)) return false;
    else {
        this.map.set(val, this.map.size);
        this.arr.push(val);
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map.has(val)) {
        const idx = this.map.get(val);
        const last = this.arr[this.map.size-1];
        this.map.set(last, idx);
        this.arr[idx] = last;
        this.arr.pop();
    }
    return this.map.delete(val);
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random()*this.map.size)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */