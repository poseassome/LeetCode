/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function(height, threshold) {
    let res = [];
    for(let i=0; i<height.length-1; i++){
        if(height[i] > threshold) res.push(i+1);
    }
    return res;
};