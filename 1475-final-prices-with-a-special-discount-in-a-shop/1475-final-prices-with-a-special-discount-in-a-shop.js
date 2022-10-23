/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let answer = [];
    while(prices.length){
        let price = prices[0];
        prices.shift();
        let discount = prices.find(el => el<=price);
        answer.push(discount ? price - discount : price);
    }
    return answer;
};