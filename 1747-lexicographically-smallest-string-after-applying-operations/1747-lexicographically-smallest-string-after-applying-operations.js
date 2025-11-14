/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
    const rotate = str => {
        let newStr = str.slice(b, s.length) + str.slice(0, b);
        return newStr;
    }
    const add = str => {
        let newStr = "";
        for(let i=0; i<s.length; i++){
            if(i % 2 === 0) newStr += str[i];
            else newStr += String((parseInt(str[i])+a) % 10);
        }
        return newStr;
    }

    const set = new Set();
    const queue = [];
    queue.push(s);
    let res = s;
    while(queue.length){
        const string = queue.shift();
        if(string < res) res = string;
        let rotated = rotate(string);
        let addA = add(string);
        if(!set.has(rotated)){
            set.add(rotated);
            queue.push(rotated);
        }
        if(!set.has(addA)){
            set.add(addA);
            queue.push(addA);
        }
    }
    return res;
};