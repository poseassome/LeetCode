/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const set = new Set();
    for(const k of key){
        if(k === ' ') continue;
        if(!set.has(k)) set.add(k);
    }
    const sH = new Map();
    sH.set(' ', ' ');
    let idx = 0;
    for(const val of set.values()){
        const letter = String.fromCharCode(97+idx++);
        sH.set(val, letter);
    }
    let result = [];
    for(const msg of message){
        result.push(sH.get(msg))
    }
    return result.join('');  
};