/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let i = 1;
    let cnt = 0;
    while(i <= n){
        if(n%i === 0) cnt++;
        i++;
    }
    return cnt === 3 ? true : false;
};