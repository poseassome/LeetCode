/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    const len = cookies.length;
    let arr = Array(k).fill(0);
    let res = Infinity;
    const sol = (arr, idx) => {
        if(idx >= len) return res = Math.min(res, Math.max(...arr));
        let inBag = cookies[idx];
        for(let i=0; i<k; i++){
            arr[i] += inBag;
            sol(arr, idx+1);
            arr[i] -= inBag;
        }
        return res;
    }
    return sol(arr, 0);
};