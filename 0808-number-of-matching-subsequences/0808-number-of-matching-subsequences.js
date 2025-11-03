/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let cnt = 0;
    for(const x of words){
        let lastidx = -1;
        let c=0;
        for(let i=0; i<x.length; i++){
            let char = x.charAt(i);
            let idx = s.indexOf(char, lastidx+1);
            if(idx > lastidx){
                c++;
                lastidx = idx;
            } else break;
        }
        if(c === x.length) cnt++;
    }
    return cnt;
};