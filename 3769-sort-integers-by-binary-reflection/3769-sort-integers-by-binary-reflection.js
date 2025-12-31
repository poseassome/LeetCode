/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function(nums) {
    nums.sort((a, b) => {
        let x = a.toString(2), y = b.toString(2);
        let nX = "", nY = "";
        for(let i = x.length-1; i>=0; i--){
            nX += x[i];
        }
        for(let i = y.length-1; i>=0; i--){
            nY += y[i];
        }
        let xN = parseInt(nX, 2), yN = parseInt(nY, 2);
        if(xN === yN) return a - b;
        return xN - yN;
    })
    return nums;
};