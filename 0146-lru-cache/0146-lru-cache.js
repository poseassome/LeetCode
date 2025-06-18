/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.list = new Map(); 
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.list.has(key)) return -1;
    const val = this.list.get(key);
    this.list.delete(key)
    this.list.set(key,val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.list.has(key)) this.list.delete(key);
    this.list.set(key,value);
    if(this.list.size > this.capacity){
        let lru = this.list.keys().next().value;
        this.list.delete(lru)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */