/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let Max = Number.MIN_SAFE_INTEGER;
    for(const account of accounts){
        let sum = 0;
        for(const x of account){
            sum += x;
        }
        Max = Math.max(Max, sum);
    }
    return Max;
};