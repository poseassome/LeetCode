/**
 * @param {number[][]} grid
 * @param {number[]} limits
 * @param {number} k
 * @return {number}
 */
var maxSum = function(grid, limits, k) {
    let sumArr = [], i = 0;
    for(const row of grid){
        row.sort((a,b) => a-b);
        let j = row.length-1;
        while(limits[i] > 0 && j >= 0){
            sumArr.push(row[j]);
            j--;
            limits[i]--;
        }
        i++;
    }
    sumArr.sort((a,b) => b-a);
    return sumArr.slice(0, k).reduce((acc, cur) => acc + cur, 0);
};