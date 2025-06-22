/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let res = 0;
    const beauty = arr => {
        let min = Infinity, max = 0;
        for(let i=0; i<arr.length; i++){
            max = Math.max(arr[i], max);
            if(arr[i] > 0) min = Math.min(arr[i], min);
        }
        return max - min;
    }

    for(let i=0; i<s.length; i++){
        let arr = new Array(26);
        arr.fill(0);
        for(let j=i; j<s.length; j++){
            arr[(s[j].charCodeAt()-97)]++;
            res += beauty(arr);
        }
    }
    return res;
};