/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const obj = {}, res = [[], []];
    for(let i=0; i<matches.length; i++){
        const item = matches[i];
        obj[item[0]] = obj[item[0]] || 0;
        obj[item[1]] = (obj[item[1]] || 0) - 1;
    }
    for(const player in obj) {
      if(obj[player] === 0) res[0].push(+player);
      else if(obj[player] === -1) res[1].push(+player);
    }
    return res;
};