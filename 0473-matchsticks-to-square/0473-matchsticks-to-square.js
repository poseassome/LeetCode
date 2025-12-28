/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    let total = matchsticks.reduce((acc, cur) => acc + cur);
    if(total%4) return false;
    let side = total/4;
    const DFS = (accum, sides, idx) => {
        if(sides === 4) return true;
        for(let i=idx; i<matchsticks.length; i++){
            if(matchsticks[i] === 0) continue;
            if(matchsticks[i] + accum <= side){
                let o = matchsticks[i];
                let match = matchsticks[i] + accum == side ? 1 : 0;
                matchsticks[i] = 0;
                if(DFS(match ? 0 : accum + o, sides+match, match ? 0 : i + 1)) return true;
                matchsticks[i] = o;
            }
        }
        return false;
    };
    return DFS(0, 0, 0);
};