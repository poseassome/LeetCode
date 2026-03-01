/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let jobs = [];
    for(let i=0; i<difficulty.length; i++){
        jobs.push([difficulty[i], profit[i]]);
    }
    jobs.sort((a, b) => a[0] - b[0]);
    worker.sort((a, b) => a - b);
    let maxProfit = 0, bestProfit = 0, i = 0;
    for(const x of worker){
        while(i < jobs.length && x >= jobs[i][0]){
            bestProfit = Math.max(bestProfit, jobs[i][1]);
            i++;
        }
        maxProfit += bestProfit;
    }
    return maxProfit;
};