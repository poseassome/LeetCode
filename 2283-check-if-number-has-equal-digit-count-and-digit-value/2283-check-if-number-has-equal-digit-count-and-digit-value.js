/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let sH = new Map();
    for(const x of num){
        sH.set(x, sH.get(x)+1 || 1);
    }
    for(let i=0; i<num.length; i++){
        let cnt = sH.get(i+'') || 0;
        if(num[i] != cnt) return false;
    }
    return true;
};