/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a,b) => a-b);
    let score = 0, resPower = power;
    while(tokens.length){
        const flipLeft = resPower-tokens[0];
        if(tokens.length === 1 && flipLeft < 0) break;
        if(flipLeft >= 0){
            resPower = flipLeft;
            score++;
            tokens.shift();
        } else if(score >=1){
            resPower += tokens.pop();
            score--;
        } else break;
    }
    return score;
};