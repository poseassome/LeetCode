/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    let str = [0], res = 0, path = input.split("\n");
    for(const x of path){
        let level = x.lastIndexOf("\t")+1;
        while(level+1 < str.length) str.pop();
        let len = str[str.length-1]+(x.length-level+1);
        str.push(len);
        if(x.indexOf(".") !== -1) res = Math.max(res, len-1);
    }
    return res;
};