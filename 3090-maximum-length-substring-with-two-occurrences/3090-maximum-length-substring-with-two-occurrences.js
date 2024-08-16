/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let str = s.split(''), arr = [];
    for(let i=0; i<str.length; i++){
        for(let j=i; j<str.length; j++){
            const temp = str.slice(i, j+1);
            const obj = {};
            for(const x of temp){
                obj[x] = (obj[x] || 0)+1;
            }
            if(Math.max(...Object.values(obj)) <= 2) arr.push(temp.length);
        }
    }
    return Math.max(...arr);
};