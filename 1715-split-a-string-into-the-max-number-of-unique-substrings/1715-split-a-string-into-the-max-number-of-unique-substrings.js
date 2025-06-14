/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    let res = 1;
    let str = new Set();

    const search = s => {
        if(!str.has(s)){
            str.add(s);
            res = Math.max(res, str.size);
            str.delete(s);
        }
        for(let i=1; i<s.length; i++){
            let sub = s.substring(0, i);
            if(str.has(sub)) continue;
            str.add(sub);
            search(s.substring(i));
            str.delete(sub);
        }
    }

    search(s);
    return res;
};