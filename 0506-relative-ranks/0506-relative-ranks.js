/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const rank = [...score].sort((a,b) => b-a);
    return score.map((el, idx) => {
        if(el === rank[0]) return 'Gold Medal';
        else if(el === rank[1]) return 'Silver Medal';
        else if(el === rank[2]) return 'Bronze Medal';
        else return rank.indexOf(el)+1+'';
    })
};