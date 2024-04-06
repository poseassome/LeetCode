/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) return "1";
    let prev = "1", cur = "", i = 1;
    while(i<n){
        let cnt = 1;
        for(let j=0; j<prev.length-1; j++){
            if(prev[j] === prev[j+1]) cnt++;
            else {
                cur += cnt.toString()+prev[j];
                cnt = 1;
            }
        }
        cur += cnt.toString()+prev[prev.length-1];
        prev = cur;
        cur = "";
        i++;
    }
    return prev;
};