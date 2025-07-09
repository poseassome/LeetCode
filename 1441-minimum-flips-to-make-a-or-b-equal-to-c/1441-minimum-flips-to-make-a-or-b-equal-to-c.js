/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let cnt = 0;
    while(a > 0 || b > 0 || c > 0){
        let arem = a%2;
        let brem = b%2;
        let crem = c%2;
        if(crem === 0){
            if(arem === 1 && brem === 1) cnt += 2;
            else if(arem !== 0 || brem !== 0) cnt++;
        } else if(crem==1){
            if(arem === 0 && brem === 0) cnt++;
        }
        a = Math.floor(a/2);
        b = Math.floor(b/2);
        c = Math.floor(c/2);
    }
    return cnt;
};