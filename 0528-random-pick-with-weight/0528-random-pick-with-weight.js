/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.w = [];
    this.total = w.reduce((acc, cur) => acc+cur, 0);
    let start = 0;
    for(const x of w){
        this.w.push([start, start+x]);
        start = start+x;
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const ran = Math.floor(Math.random()*this.total);
    for(let i=0; i<this.w.length; i++){
        const pair = this.w[i];
        if(pair[0] <= ran && ran < pair[1]) return i;
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */