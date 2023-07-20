/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let sH = new Map(), cnt = 0;
    dominoes.forEach(el => {
        el.sort((a,b) => a-b);
        el = el.join('');
        if(sH.get(el)){
            cnt += sH.get(el);
            sH.set(el, sH.get(el)+1);
        } else sH.set(el, 1);
    })
    return cnt;
};