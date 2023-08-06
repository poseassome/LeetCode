/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let cnt = 0;
    for(const x of details){
        const age = Number(x[11]+x[12]);
        if(age>60) cnt++;
    }
    return cnt;
};