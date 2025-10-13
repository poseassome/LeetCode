/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let cur = 0, total = 0;
    let res = 0;
    for(let i=0; i<gas.length; i++){
        let gain = gas[i] - cost[i];
        cur = cur + gain;
        if(cur < 0){
            cur = 0;
            res = i+1;
        }
        total += gain;
    }
    return total < 0 ? -1 : res;
};