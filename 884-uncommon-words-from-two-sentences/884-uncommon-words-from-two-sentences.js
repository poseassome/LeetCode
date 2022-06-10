/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let answer =[];
    let sH = new Map();
    
    s1 = s1.split(" ");
    s2 = s2.split(" ");
    
    s1.forEach(ele => {
        if(sH.has(ele)) sH.set(ele, sH.get(ele)+1);
        else sH.set(ele, 0)
    })
    s2.forEach(ele => {
        if(sH.has(ele)) sH.set(ele, sH.get(ele)+1);
        else sH.set(ele, 0)
    })
    
    for(let [key, val] of sH){
        if(val === 0) answer.push(key);
    }
    
    return answer;
};