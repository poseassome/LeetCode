/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b) => a-b);
    let cnt = 0;
    for(const x of costs){
        if(x <= coins){
            coins -= x;
            cnt++;
        } else break;
    }
    return cnt;
};