/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let tri = triangle;
    for(let i=tri.length-1; i>0; i--){
        let layer = tri[i];
        for(let j=0; j<layer.length-1; j++){
            tri[i-1][j] += Math.min(layer[j], layer[j+1]);
        }
    }
    return tri[0][0];
};