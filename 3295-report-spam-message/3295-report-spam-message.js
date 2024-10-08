/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
    const set = new Set();
    let cnt = 0;
    for(const x of bannedWords){
        set.add(x);
    }
    for(const m of message){
        if(set.has(m)) cnt++;
    }
    return cnt >= 2;
};