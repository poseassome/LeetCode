/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
    const isSubsequence = (s1, s2) => {
        let i = 0;
        for(const x of s2){
            if (s1[i] === x) i++;
        }
        return i === s1.length;
    };
    strs.sort((a, b) => b.length - a.length);

    for(let i=0; i <strs.length; i++){
        if(strs.every((el, idx) => i === idx || !isSubsequence(strs[i], el))) {
            return strs[i].length;
        }      
    }
    return -1;
};