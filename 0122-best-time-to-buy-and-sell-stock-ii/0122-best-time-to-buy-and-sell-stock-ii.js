/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total = 0;
    for(let i=1; i<prices.length; i++){
        if(prices[i] > prices[i-1]){
            const diff = prices[i] - prices[i-1];
            total = total+diff;
        }
    }
    return total;
};