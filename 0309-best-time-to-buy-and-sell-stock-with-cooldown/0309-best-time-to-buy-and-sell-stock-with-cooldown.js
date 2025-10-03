/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length;
    if(len === 0) return 0;

    let sold = 0;
    let hold = -prices[0];
    let rest = 0;
    for(let i=1; i<len; i++){
        let prevSold = sold;
        sold = hold + prices[i];
        hold = Math.max(hold, rest-prices[i]);
        rest = Math.max(rest, prevSold);
    }
    return Math.max(sold, rest);
};