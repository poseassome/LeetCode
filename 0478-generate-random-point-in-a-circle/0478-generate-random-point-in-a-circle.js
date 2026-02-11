/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    let x = y = 1;
    while(x*x + y*y > 1){
        x = 2*Math.random() - 1;
        y = 2*Math.random() - 1;
    }
    return [this.x_center + this.radius*x, this.y_center + this.radius*y]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */