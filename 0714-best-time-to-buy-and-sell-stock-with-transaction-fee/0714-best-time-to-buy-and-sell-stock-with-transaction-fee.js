/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let hold = -prices[0]; 
    let not_hold = 0;     

    for(const price of prices) { 
        const new_hold = Math.max(hold, not_hold-price);
        const new_not_hold = Math.max(not_hold, hold+price-fee);
        hold = new_hold;
        not_hold = new_not_hold;
    }
    return not_hold;
};