/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let res = 0;
    piles.sort((a,b) => b-a);
    for(let i=1; i<piles.length-(piles.length/3); i+=2){
        res += piles[i];
    }
    return res;
};