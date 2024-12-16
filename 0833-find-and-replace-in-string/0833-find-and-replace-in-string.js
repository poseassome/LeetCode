/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    let res = [...s];
    for(let i=0; i<sources.length; i++){
        const len = sources[i].length;
        const start = indices[i];
        const data = s.substring(start, start+len).indexOf(sources[i]);
        if(data > -1){
            for(let j=start; j<start+len; j++){
                res[j] = '';
            }
            res[start] = targets[i];
        }
    }
    return res.join('');
};