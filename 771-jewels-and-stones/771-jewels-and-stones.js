/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let answer = 0;
    jewels = jewels.split("");
    stones = stones.split("");
    for(let i=0; i<stones.length; i++){
        if(jewels.includes(stones[i])){
            answer++;
            stones.splice(i, 1);
            i--;
        }
    }
    return answer;
};