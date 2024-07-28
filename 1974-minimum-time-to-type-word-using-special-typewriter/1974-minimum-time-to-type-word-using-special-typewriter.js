/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let cur = 'a', res = 0;
    for(let i=0; i<word.length; i++){
        const move = Math.abs(word.charCodeAt(i) - cur.charCodeAt(0));
        if(move) res += Math.min(move, 26-move);
        cur = word[i];
        res++;
    }
    return res;
};