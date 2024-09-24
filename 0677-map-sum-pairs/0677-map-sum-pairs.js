
var MapSum = function() {
    this.sumMap = new Map();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.sumMap.set(key, val);
    return;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0, len = prefix.length;
    for(const x of this.sumMap){
        if(x[0].slice(0, len) === prefix) sum+=x[1];
    }
    return sum;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */