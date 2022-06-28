/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let cnt = 0;
    const height = [...heights];
    heights.sort((a,b) => a-b);
    for(let i=0; i<heights.length; i++){
        if(heights[i] !== height[i]) cnt++;
    }
    return cnt;
};