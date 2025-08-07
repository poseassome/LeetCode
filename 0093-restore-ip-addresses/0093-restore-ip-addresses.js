/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const isValid = str => {
        const arr = str.split(".");
        for(const x of arr){
            if(parseInt(x) < 0 || parseInt(x) > 255) return false;
            if(x[0] === "0") {
                if(x.length > 1) return false;
            }
        }
        return true;
    }

    let res = [];
    const backtrack = (idx, dots, str) => {
        if(dots === 0){
            if(isValid(str)) res.push(str);
            return;
        }
        for(let i=idx; i<str.length; i++){
            let address = str.slice(0, i) + "." + str.slice(i);
            backtrack(i+2, dots-1, address);
        }
    }
    backtrack(1, 3, s);
    return res;
};