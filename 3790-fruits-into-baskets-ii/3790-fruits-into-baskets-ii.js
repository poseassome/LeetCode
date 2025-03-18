/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let unplaced = 0;
    for(const x of fruits){
        const position = baskets.findIndex(el => el >= x);
        if(position >= 0) baskets[position] = 0;
        else unplaced++;
    }
    return unplaced;
};