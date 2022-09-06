/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.arr = new Array(n);
    this.p = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.arr[idKey-1] = value;
    let answer = [];
    while(this.arr[this.p]){
        answer.push(this.arr[this.p++]);
    }
    return answer;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */