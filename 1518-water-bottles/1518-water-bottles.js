/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drink = numBottles;
    let bottles = numBottles;
    while(bottles >= numExchange){
        const exchange = Math.floor(bottles/numExchange);
        const empty = bottles%numExchange;
        drink += exchange;
        bottles = exchange + empty;
    }
    return drink;
};