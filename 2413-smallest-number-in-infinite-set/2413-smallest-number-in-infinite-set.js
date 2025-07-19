
var SmallestInfiniteSet = function() {
    this.minHeap = [];
    this.added = new Set();
    this.cur = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if(this.minHeap.length > 0){
        const smallest = this.minHeap.pop();
        this.added.delete(smallest);
        return smallest;
    }
    return this.cur++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if(num < this.cur && !this.added.has(num)){
        this.added.add(num);
        this.minHeap.push(num);
        this.minHeap.sort((a,b) => b-a);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */