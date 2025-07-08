/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let max = Math.max(...days) + 1;
    let arr = new Array(max).fill(0);
    for(let i=1; i<arr.length; i++){
        if(days.includes(i)){
            arr[i] = Math.min(
                        costs[0] + arr[i-1], 
                        costs[1] + arr[Math.max(i-7, 0)],
                        costs[2] + arr[Math.max(i-30, 0)]
                    );            
        } else arr[i] = arr[i-1]};
    return arr[max-1];
};