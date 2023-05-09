/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    let sH = new Map();
    for(const x of word){
        sH.set(x, (sH.get(x) || 0)+1);
    }
    const arr = [...sH.values()];
    for(let i=0; i<arr.length; i++){
        const letters = Array.from(arr);
        if(letters[i] === 1) letters.splice(i, 1);
        else letters[i]--;
        if(new Set(letters).size === 1) return true;
    }
    return false;
};