/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function(target) {
    let res = [], str = '';
    for(let i=0; i<target.length; i++){
        str += 'a';
        res.push(str);
        for(let j='b'.charCodeAt(0); j<=target[i].charCodeAt(0); j++){
            str = str.slice(0, -1);
            str += String.fromCharCode(j);
            res.push(str);
        }
    }
    return res;
};