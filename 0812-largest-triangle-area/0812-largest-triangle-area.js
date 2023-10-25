/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let area = 0;
    const len = points.length;
    for(let i=0; i<len; i++){
        [a1, b1] = points[i];
        for(let j=i+1; j<len; j++){
            [a2, b2] = points[j];
            for(let k=j+1; k<len; k++){
                [a3, b3] = points[k];
                const val = Math.abs((a1*(b2-b3)+a2*(b3-b1)+a3*(b1-b2))/2);
                if(val>area) area = val;
            }
        }
    }
    return area;
};