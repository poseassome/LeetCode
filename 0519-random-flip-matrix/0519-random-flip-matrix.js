/**
 * @param {number} m
 * @param {number} n
 */
var Solution = function(m, n) {
    this.m = m;
    this.n = n;
    this.set = new Set(); 
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
    let generated = this.generate();

    while(this.set.has(generated.key)) {
        generated = this.generate();
    }

    this.set.add(generated.key);

    return generated.value;
};

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
    this.set.clear();
};

/**
 * @return {void}
 */
Solution.prototype.generate = function() {
    const m = Math.ceil(Math.random() * this.m - 1);
    const n = Math.ceil(Math.random() * this.n - 1);

    const value = [m, n];

    return {key: `${value}`, value};
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */