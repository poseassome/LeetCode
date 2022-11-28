/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let cnt = 0;
    for(let i=0; i<logs.length; i++){
        if(logs[i] === '../'){
            if(cnt > 0) cnt--;
            continue;
        }
        if(logs[i] === './') continue;
        else cnt++;
    }
    return cnt;
};