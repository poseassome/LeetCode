/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    const count = new Array(121).fill(0);
    ages.forEach(el => count[el]++);
    let res = 0, total = 0;
    for(let i=0; i<=120; i++){
        if(i > 14 && count[i] !== 0){
            const limit = Math.floor(0.5*i) + 7;
            const rest = total-count[limit];
            res += (count[i] * rest);
            res += (count[i] * (count[i]-1));
        }
        total += count[i];
        count[i] = total;
    }
    return res;
};