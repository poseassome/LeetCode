/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    let rankMap = mapFunc(ranks);
    let suitMap = mapFunc(suits);
    if(suitMap.size === 1) return 'Flush';
    else {
        let max = 0;
        for(const rank of rankMap.values()){
            if(rank > max) max = rank;
        }
        if(max >= 3) return 'Three of a Kind';
        if(max >= 2) return 'Pair';
        else return 'High Card';
    }
};
        
function mapFunc(arr){
    let sH = new Map();
    for(const x of arr){
        if(!sH.has(x)) sH.set(x, 1);
        else sH.set(x, sH.get(x)+1);
    }
    return sH;
}