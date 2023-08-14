/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    return code.map((el, idx) => {
        if(k === 0) return 0;
        let sum = 0;
        for(let i=0; i<Math.abs(k); i++){
            idx = k>0 ? idx+1 : idx-1;
            if(idx<0) sum += code[(idx%code.length)+code.length];
            else if(idx>0) sum += code[idx%code.length];
            else sum += code[idx];
        }
        return sum;
    })
};